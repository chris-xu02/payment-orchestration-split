export type PaymentIntent = { amountCents: number; currency: string; bookingId: string };

export function validate(intent: PaymentIntent): string[] {
  const issues: string[] = [];
  if (intent.amountCents <= 0) issues.push("amount must be positive");
  if (!/^[A-Z]{3}$/.test(intent.currency)) issues.push("currency must be ISO 4217");
  return issues;
}