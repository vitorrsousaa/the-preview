import { useAuth } from "@/hooks/auth";
import { useLocation } from "react-router-dom";

export function useSidebarHook() {
	const { user, signout } = useAuth();

	const { pathname } = useLocation();

	return {
		pathname,
		name: user.name,
		email: user.email,
		picture: user.picture,
		signout,
	};
}
