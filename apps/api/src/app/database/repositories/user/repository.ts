import type {
	IDatabaseClient,
	TBaseIndexes,
} from "@application/database/database";
import type { User } from "@core/domain/user";
import type { IUserRepository, UserDynamoDB } from "./types";

export class UserRepository implements IUserRepository {
	constructor(private readonly dbInstance: IDatabaseClient) {}

	async create(
		createInput: Omit<User, "createdAt" | "updatedAt">,
	): Promise<User> {
		const { PK, SK } = this.getKeys(createInput.email);
		const { gsi1pk, gsi1sk } = this.getSecondaryIndexes(
			createInput.customerId,
			createInput.subscriptionId,
		);
		const now = new Date().toISOString();

		const newUser: UserDynamoDB = {
			email: createInput.email,
			name: createInput.name,
			id: createInput.id,
			picture: createInput.picture,
			customer_id: createInput.customerId,
			price_id: createInput.priceId,
			subscription_id: createInput.subscriptionId,
			subscription_status: createInput.subscriptionStatus,
			created_at: now,
			updated_at: now,
			gsi1pk,
			gsi1sk,
			PK,
			SK,
		};

		await this.dbInstance.create({
			...newUser,
		});

		return this.mapToDomain(newUser);
	}

	async getById(email: string): Promise<User | undefined> {
		const { PK, SK } = this.getKeys(email);

		const item = await this.dbInstance.get<UserDynamoDB>({
			Key: { PK, SK },
		});

		return item ? this.mapToDomain(item) : undefined;
	}

	private mapToDomain(item: UserDynamoDB): User {
		return {
			email: item.email,
			id: item.id,
			name: item.name,
			createdAt: item.created_at,
			updatedAt: item.updated_at,
			picture: item.picture,
			customerId: item.customer_id,
			priceId: item.price_id,
			subscriptionId: item.subscription_id,
			subscriptionStatus: item.subscription_status,
		};
	}

	private getSecondaryIndexes(
		customerId: string,
		subscriptionId: string,
	): TBaseIndexes {
		return {
			gsi1pk: `CUSTOMER_ID#${customerId}`,
			gsi1sk: `SUBSCRIPTION_ID#${subscriptionId}`,
		};
	}

	private getKeys(id: string): { PK: string; SK: string } {
		return {
			SK: `USER#${id}`,
			PK: "PROFILE",
		};
	}
}
