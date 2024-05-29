import { QueryClientProvider } from "@/libs/query";
import { Toaster } from "react-hot-toast";
import { Router } from "./router/browser";

function App() {
	return (
		<QueryClientProvider>
			<Router />

			<Toaster />
		</QueryClientProvider>
	);
}

export default App;
