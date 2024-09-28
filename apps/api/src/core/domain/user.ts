import type { Prettify } from "@application/utils/types";
import type { BaseEntity } from "@core/base";

/**
 * User domain model
 */
export type User = Prettify<
	{
		email: string;
		name: string;
		picture: string;
	} & BaseEntity
>;
