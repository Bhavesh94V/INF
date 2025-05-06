import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { jobTitle, jobId, company, name, email, phone, coverLetter, resumeFileName } = data

    // Create a test SMTP transporter
    // In production, you would use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "user@example.com",
        pass: process.env.SMTP_PASSWORD || "password",
      },
      tls: {
        rejectUnauthorized: false, // Only for development
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@eliterecruit.com",
      to: process.env.ADMIN_EMAIL || "admin@eliterecruit.com",
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
        <p>Resume Filename: ${resumeFileName}</p>
        <p><em>Note: In a production environment, the actual resume file would be attached or stored securely.</em></p>
        
        <h2>Cover Letter</h2>
        <p>${coverLetter || "No cover letter provided."}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Application submitted successfully" })
  } catch (error) {
    console.error("Error submitting application:", error)
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 })
  }
}
