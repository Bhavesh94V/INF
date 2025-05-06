const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "../uploads")
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname))
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error("Only PDF, DOC, and DOCX files are allowed!"))
    }
  },
})

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Job application endpoint
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { jobTitle, jobId, company, name, email, phone, coverLetter } = req.body

    // Validate required fields
    if (!jobTitle || !jobId || !name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      })
    }

    // Get resume file info if uploaded
    const resumeFile = req.file
      ? {
          filename: req.file.filename,
          path: req.file.path,
          size: req.file.size,
        }
      : null

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Job Application: ${jobTitle} (ID: ${jobId})`,
      html: `
        <h1>New Job Application</h1>
        <h2>Job Details</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        
        <h2>Applicant Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h2>Resume</h2>
        ${resumeFile ? `<p>Resume attached: ${resumeFile.filename}</p>` : `<p>No resume attached</p>`}
        
        <h2>Cover Letter</h2>
        <p>${coverLetter || "No cover letter provided."}</p>
      `,
      attachments: resumeFile
        ? [
            {
              filename: resumeFile.filename,
              path: resumeFile.path,
            },
          ]
        : [],
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting application:", error)
    return res.status(500).json({
      success: false,
      message: "Failed to submit application",
    })
  }
})

module.exports = router
