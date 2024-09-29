import { PaymentProvider } from "@application/providers/payments";
import { makeConfigEnvironment } from "@factories/config/environment";
import { makeStripeClient } from "@factories/libs/stripe";

export function makePaymentsProvider() {
	return new PaymentProvider(makeStripeClient(), makeConfigEnvironment());
}
