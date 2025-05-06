  const express = require("express")
  const router = express.Router()
  const nodemailer = require("nodemailer")

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // Contact form endpoint
  router.post("/", async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields",
        })
      }

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          
          <h2>Message</h2>
          <p>${message}</p>
        `,
      }

      // Send email
      await transporter.sendMail(mailOptions)

      return res.status(200).json({
        success: true,
        message: "Message sent successfully",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      return res.status(500).json({
        success: false,
        message: "Failed to send message",
      })
    }
  })

  module.exports = router
