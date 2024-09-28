import { useAuth } from "@/hooks/auth";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@shared/ui";

export function Signin() {
	const { signInWithGoogle } = useAuth();

	return (
		<div className="flex justify-center mt-20 items-center space-y-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl text-center">Login</CardTitle>
					<CardDescription className="text-center">
						Entre com sua conta do Google
					</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center">
					<Button
						className="w-full max-w-sm"
						variant="outline"
						onClick={signInWithGoogle}
					>
						Login com Google
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
