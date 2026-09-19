import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    // Spam honeypot detection
    if (validatedData.honeypot && validatedData.honeypot.length > 0) {
      return NextResponse.json(
        { message: "Inquiry received successfully." },
        { status: 200 }
      );
    }

    // In production, this can forward to Resend, Nodemailer, WhatsApp webhook, or CRM
    console.log("=== NEW WEDDING/EVENT INQUIRY ===");
    console.log("Name:", validatedData.name);
    console.log("Phone:", validatedData.phone);
    console.log("Email:", validatedData.email);
    console.log("Service:", validatedData.service);
    console.log("Event Date:", validatedData.eventDate);
    console.log("Guest Count:", validatedData.guestCount);
    console.log("Estimated Budget:", validatedData.estimatedBudget);
    console.log("Message:", validatedData.message);
    console.log("==================================");

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Rhythm Weddings and Events. Our event director will get back to you promptly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: error?.errors?.[0]?.message || "Invalid submission data." },
      { status: 400 }
    );
  }
}
