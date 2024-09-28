import { httpClient } from "../httpClient";

interface GoogleSigninParams {
	code: string;
}

export async function googleSignin({ code }: GoogleSigninParams) {
	const { data } = await httpClient.post<{ token: string }>("/auth/google", {
		code,
	});

	return data;
}
