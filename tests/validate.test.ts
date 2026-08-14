import { describe, expect, it } from "vitest";
import { validate } from "../src/validate.js";

describe("validate", () => {
  it("rejects zero amount", () => {
    expect(validate({ amountCents: 0, currency: "USD", bookingId: "b1" }).length).toBeGreaterThan(0);
  });
});