import express from "express"
import nodemailer from "nodemailer"

const router = express.Router()

const recipientEmail = "dharanidharanvenugopal123@gmail.com"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const hasSmtpConfig = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)

router.post("/submit", async (req, res) => {
  try {
    const { email, message } = req.body

    if (!email || !message) {
      return res.status(400).json({ success: false, error: "Email and message are required" })
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipientEmail,
      replyTo: email,
      subject: `New portfolio message from ${email}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New message from portfolio contact form</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    }

    if (!hasSmtpConfig) {
      console.error("SMTP configuration missing. Set SMTP_HOST, SMTP_USER and SMTP_PASS in .env to enable email delivery.")
      return res.status(500).json({ success: false, error: "SMTP not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in your environment." })
    }

    // Debug: log resolved transporter settings (non-secret parts)
    try {
      console.log('SMTP host=%s port=%s secure=%s hasSmtpConfig=%s', process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE, hasSmtpConfig)
      try { console.log('transporter.options=%o', transporter.options) } catch (e) { console.log('transporter options unavailable') }
      await transporter.sendMail(mailOptions)
    } catch (sendErr) {
      console.error('Error sending email:', sendErr)
      throw sendErr
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    })

  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
