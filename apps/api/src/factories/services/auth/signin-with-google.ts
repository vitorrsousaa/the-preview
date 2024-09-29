import { SigninWithGoogleService } from "@application/modules/auth/services/signin-with-google";
import { makeGoogleAuthProvider } from "@factories/providers/google-auth";
import { makePaymentsProvider } from "@factories/providers/payments";
import { makeTokenProvider } from "@factories/providers/token";
import { makeUserRepository } from "@factories/repositories/user";

export function makeSigninWithGoogleService() {
	return new SigninWithGoogleService(
		makeGoogleAuthProvider(),
		makeUserRepository(),
		makeTokenProvider(),
		makePaymentsProvider(),
	);
}
