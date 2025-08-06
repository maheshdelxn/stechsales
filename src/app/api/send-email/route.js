// src/app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();
    console.log('Received form data:', { name, email, phone, subject, message });

    // Validate input
    if (!name || !email || !phone || !subject || !message) {
      return Response.json({ 
        success: false, 
        message: 'All fields are required' 
      }, { status: 400 });
    }

    // Check environment variables
    const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
    const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

    if (!EMAIL_USERNAME || !EMAIL_PASSWORD) {
      console.error('Missing email credentials');
      return Response.json({
        success: false,
        message: 'Server configuration error'
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD
      }
    });

    // Verify connection first
    await transporter.verify();
    console.log('Server is ready to take our messages');

    // Email to site owner
    await transporter.sendMail({
      from: `"Contact Form" <${EMAIL_USERNAME}>`,
      to: 'maheshindalkar.delxn@gmail.com',
      subject: `New ${subject} Inquiry - ${name}`,
      html: `
        <h2 style="color: #2563eb;">New ${subject} Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f3f4f6; padding: 1rem; border-left: 4px solid #2563eb;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="margin-top: 1rem; color: #6b7280; font-size: 0.875rem;">
          Received at: ${new Date().toLocaleString()}
        </p>
      `
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Contact Form" <${EMAIL_USERNAME}>`,
      to: email,
      subject: `Thank you for your ${subject} inquiry`,
      html: `
        <h2 style="color: #2563eb;">Hi ${name},</h2>
        <p>We've received your ${subject.toLowerCase()} inquiry and will respond within 24 hours.</p>
        
        <h3 style="color: #1e40af; margin-top: 1.5rem;">Your Submission Details:</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong></li>
        </ul>
        <div style="background: #f3f4f6; padding: 1rem; border-left: 4px solid #2563eb; margin: 0.5rem 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <p style="margin-top: 1.5rem;">For urgent inquiries, please call us at <strong>+91 8208269162</strong>.</p>
        
        <p style="margin-top: 2rem; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 1rem;">
          Best regards,<br>
          <strong style="color: #1e40af;">Our Team</strong>
        </p>
      `
    });

    return Response.json({ 
      success: true,
      message: 'Message sent successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({
      success: false,
      message: 'Failed to send message',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}