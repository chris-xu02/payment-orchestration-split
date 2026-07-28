import type { PaymentIntent } from "./validate.js";

export async function execute(intent: PaymentIntent): Promise<{ transferId: string }> {
  return { transferId: `xfer_${intent.bookingId}` };
}