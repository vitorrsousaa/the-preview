import type { Profile } from "@/entities/profile";
import { httpClient } from "../httpClient";

export async function profile() {
	const { data } = await httpClient.get<Profile>("/auth/profile");
	return data;
}
