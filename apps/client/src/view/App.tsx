import { AuthProvider } from "@/contexts/auth";
import { QueryClientProvider } from "@/libs/query";
import { Toaster } from "react-hot-toast";
import { Router } from "./router/browser";

function App() {
	return (
		<QueryClientProvider>
			<AuthProvider>
				<Router />

				<Toaster />
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
