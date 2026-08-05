import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USERNAME:", process.env.SMTP_USERNAME);
    console.log("CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL);

    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // Port 587 uses STARTTLS
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
            logger: true,
            debug: true,
        });

        // Verify SMTP connection before sending
        await transporter.verify();
        console.log("✅ SMTP connection verified.");

        const info = await transporter.sendMail({
            from: `"${process.env.SMTP_FROM_NAME ?? "Kucheza Gaming"}" <${process.env.SMTP_USERNAME}>`,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `New contact form message from ${name}`,
            text: `Name: ${name}
Email: ${email}

Message:
${message}`,
            html: `
                <h2>New Contact Form Submission</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>

                <h3>Message</h3>
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        });

        console.log("✅ Email sent successfully.");
        console.log("Message ID:", info.messageId);
        console.log("Response:", info.response);
        console.log("Accepted:", info.accepted);
        console.log("Rejected:", info.rejected);

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
            response: info.response,
        });
    } catch (error) {
        console.error("❌ Contact form send failed:");
        console.error(error);

        return NextResponse.json(
            {
                error: "Something went wrong sending your message.",
                details:
                    error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        );
    }
}