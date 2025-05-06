const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

// Admin login endpoint
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body

    // In a real application, you would validate against a database
    // This is a simplified example for demonstration purposes
    if (username === "admin" && password === "admin123") {
      // Create JWT token
      const token = jwt.sign({ id: 1, username: "admin", role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" })

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      })
    }
  } catch (error) {
    console.error("Login error:", error)
    return res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
