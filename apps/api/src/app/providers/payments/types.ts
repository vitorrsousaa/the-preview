import type Stripe from "stripe";

export interface CreateCustomerInputs {
	name: string;
	email: string;
}

export interface CreateCustomerOutputs {
	customer: Stripe.Customer;
	subscription: Stripe.Subscription;
	freePlan: {
		priceId: string;
	};
}

export interface IPaymentProvider {
	createCustomer(inputs: CreateCustomerInputs): Promise<CreateCustomerOutputs>;
}
