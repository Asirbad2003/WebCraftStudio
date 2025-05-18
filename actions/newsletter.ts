"use server"

import { Resend } from "resend"
import { z } from "zod"

// Schema for email validation
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
})

// Initialize Resend with API key from environment variable
// This keeps the API key secure and not exposed in the client-side code
const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extract and validate the email
    const email = formData.get("email") as string
    const name = (formData.get("name") as string) || "Subscriber"

    const validatedFields = subscribeSchema.safeParse({ email, name })

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      }
    }

    // In a real application, you would save this to a database
    // For now, we'll just send a welcome email

    // Send welcome email using Resend
    const { data, error } = await resend.emails.send({
      from: "WebCraftStudio <hello@webcraftstudio.site>",
      to: [email],
      subject: "Welcome to WebCraftStudio Newsletter!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Welcome to WebCraftStudio Newsletter</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #3b82f6;
              padding: 20px;
              text-align: center;
              color: white;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #ffffff;
              padding: 30px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #666;
            }
            .button {
              display: inline-block;
              background-color: #3b82f6;
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 4px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to WebCraftStudio!</h1>
            </div>
            <div class="content">
              <p>Hello ${name},</p>
              <p>Thank you for subscribing to our newsletter! We're excited to share our latest web development insights, tips, and trends with you.</p>
              <p>Here's what you can expect from us:</p>
              <ul>
                <li>Monthly updates on web design trends</li>
                <li>Tips to improve your website's performance</li>
                <li>SEO strategies to boost your online presence</li>
                <li>Exclusive offers for our subscribers</li>
              </ul>
              <p>Stay tuned for our next newsletter!</p>
              <a href="https://webcraftstudio.site" class="button">Visit Our Website</a>
              <p>Best regards,<br>The WebCraftStudio Team</p>
            </div>
            <div class="footer">
              <p>© 2025 WebCraftStudio. All rights reserved.</p>
              <p>If you no longer wish to receive these emails, you can <a href="https://webcraftstudio.site/unsubscribe?email=${email}">unsubscribe</a>.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send welcome email. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
