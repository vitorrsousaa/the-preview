import type { IDatabaseClient } from "@application/database/database";
import type { User } from "@core/domain/user";
import type { IUserRepository, UserDynamoDB } from "./types";

export class UserRepository implements IUserRepository {
	constructor(private readonly dbInstance: IDatabaseClient) {}

	async create(
		createInput: Omit<User, "createdAt" | "updatedAt">,
	): Promise<User> {
		const { PK, SK } = this.getKeys(createInput.email);
		const now = new Date().toISOString();

		const newUser: UserDynamoDB = {
			email: createInput.email,
			name: createInput.name,
			id: createInput.id,
			picture: createInput.picture,
			created_at: now,
			updated_at: now,
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
		};
	}

	private getKeys(id: string): { PK: string; SK: string } {
		return {
			SK: `USER|${id}`,
			PK: "PROFILE",
		};
	}
}
