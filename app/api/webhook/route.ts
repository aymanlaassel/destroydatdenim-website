import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: "missing signature" }, { status: 400 });
  }
  const body = await req.text();
  try {
    const stripe = getStripe();
    const event = stripe.webhooks.constructEvent(body, sig, secret);
    if (event.type === "checkout.session.completed") {
      // Fulfillment hook — replace with DB write / email / Notion / etc.
      // const session = event.data.object as Stripe.Checkout.Session;
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "webhook error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
