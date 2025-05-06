import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./reducers"
import rootSaga from "./sagas"

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Configure persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // only auth will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

// Run saga
sagaMiddleware.run(rootSaga)

// Export persistor
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
