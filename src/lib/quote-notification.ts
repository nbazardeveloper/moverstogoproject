import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteNotificationSchema = z.object({
  full_name: z.string(),
  phone: z.string(),
  email: z.string(),
  move_type: z.string(),
  move_date: z.string().nullable(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const notifyQuoteRequest = createServerFn({ method: "POST" })
  .validator(quoteNotificationSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const notifyTo = process.env["QUOTE_NOTIFICATION_EMAIL"];

    if (!apiKey || !notifyTo) {
      console.error(
        "[Resend] Missing RESEND_API_KEY or QUOTE_NOTIFICATION_EMAIL — skipping quote notification email.",
      );
      return { sent: false };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Movers To Go Quotes <onboarding@resend.dev>",
        to: [notifyTo],
        reply_to: data.email,
        subject: `New quote request from ${data.full_name}`,
        html: `
          <h2>New moving quote request</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.full_name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Move date:</strong> ${data.move_date ? escapeHtml(data.move_date) : "Not specified"}</p>
          <p><strong>Details:</strong> ${escapeHtml(data.move_type)}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("[Resend] Failed to send quote notification:", await response.text());
      return { sent: false };
    }

    return { sent: true };
  });
