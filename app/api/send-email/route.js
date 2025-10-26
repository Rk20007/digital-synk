import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { type, name, email, phone, service, preferredDate, message } = body

    // Email content based on type
    const emailSubject =
      type === "callback" ? `New Callback Request from ${name}` : `New Service Booking Request from ${name}`

    const emailBody = `
      Request Type: ${type === "callback" ? "Callback Request" : "Service Booking"}
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      ${service ? `Service: ${service}` : ""}
      ${preferredDate ? `Preferred Date: ${preferredDate}` : ""}
      
      Message:
      ${message || "No message provided"}
      
      ---
      This email was sent from digitalSynk.com contact form.
    `

    // In a real application, you would use a service like SendGrid, Resend, or Nodemailer
    // For now, we'll log the email and return success
    console.log("[v0] Email to send:", {
      to: "businessinside9@gmail.com",
      subject: emailSubject,
      body: emailBody,
    })

    // Simulate email sending
    // In production, replace this with actual email service
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'businessinside9@gmail.com',
    //   subject: emailSubject,
    //   text: emailBody,
    // })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
