import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

// Configure nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

// POST /api/contact - Handle contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message']
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Store contact in memory (in production, save to database)
    const contact = {
      id: Date.now(),
      name,
      email,
      phone: phone || 'N/A',
      subject,
      message,
      timestamp: new Date().toISOString()
    }

    console.log('📧 New contact form submission:', contact)

    // Send email notification (optional - requires email configuration)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = createTransporter()
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><em>Sent at: ${new Date().toLocaleString()}</em></p>
          `
        }

        await transporter.sendMail(mailOptions)
        console.log('✅ Email notification sent')
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError.message)
        // Don't fail the request if email fails
      }
    }

    res.status(200).json({ 
      success: true,
      message: 'Message received successfully! I\'ll get back to you soon.',
      data: contact
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({ 
      error: 'Failed to process your message',
      message: error.message
    })
  }
})

export default router
