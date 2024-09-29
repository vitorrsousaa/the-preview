import type { IConfig } from "@application/config/environment";
import type Stripe from "stripe";
import type {
	CreateCustomerInputs,
	CreateCustomerOutputs,
	IPaymentProvider,
} from "./types";

export class PaymentProvider implements IPaymentProvider {
	constructor(
		private readonly stripe: Stripe,
		private readonly config: IConfig,
	) {}

	async createCustomer(
		inputs: CreateCustomerInputs,
	): Promise<CreateCustomerOutputs> {
		const freePlan = {
			priceId: this.config.STRIPE_FREE_PRICE_ID,
		};

		const customer = await this.getCustomerByEmail(inputs.email);

		if (customer) {
			const subscription = await this.getSubscriptionByCustomer(customer.id);

			return {
				customer,
				subscription,
				freePlan,
			};
		}

		const createdCustomer = await this.stripe.customers.create({
			email: inputs.email,
			name: inputs.name,
		});

		const createdCustomerSubscription = await this.stripe.subscriptions.create({
			customer: createdCustomer.id,
			items: [{ price: freePlan.priceId }],
		});

		const output = {
			customer: createdCustomer,
			subscription: createdCustomerSubscription,
			freePlan,
		};

		return output;
	}

	private async getCustomerByEmail(email: string): Promise<Stripe.Customer> {
		const customers = await this.stripe.customers.list({ email });

		return customers.data[0];
	}

	private async getSubscriptionByCustomer(
		customerId: string,
	): Promise<Stripe.Subscription> {
		const subscriptions = await this.stripe.subscriptions.list({
			customer: customerId,
			limit: 1,
		});

		return subscriptions.data[0];
	}
}
