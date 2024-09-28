import type { TBaseEntity } from "@application/database/database";
import type { Prettify } from "@application/utils/types";
import type { User } from "@core/domain/user";

/**
 * This entity is used to send user for dynamoDB with SK and PK.
 * PK - USER
 * SK - USER|uuid
 */
export type UserDynamoDB = Prettify<
	{
		name: string;
		email: string;
		created_at: string;
		updated_at: string;
	} & TBaseEntity &
		Omit<User, "updatedAt" | "createdAt">
>;

export interface IUserRepository {
	create(createInput: Omit<User, "createdAt" | "updatedAt">): Promise<User>;
	getById(id: string): Promise<User | undefined>;
}
