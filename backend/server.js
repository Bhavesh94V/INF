const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const path = require("path")

// Load environment variables
dotenv.config()

// Import routes
const contactRoutes = require("./routes/contact")
const applyRoutes = require("./routes/apply")
const authRoutes = require("./routes/auth")

// Import middleware
const { authenticateToken } = require("./middleware/auth")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Routes
app.use("/api/contact", contactRoutes)
app.use("/api/apply", applyRoutes)
app.use("/api/auth", authRoutes)

// Protected route example
app.get("/api/admin/dashboard", authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: "Protected data accessed successfully",
    user: req.user,
  })
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
