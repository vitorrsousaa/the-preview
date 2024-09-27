import { STORAGE_KEYS } from "@/config/storages";
import type { Profile } from "@/entities/profile";
import { authServices } from "@/services/auth";
import { PageLoader } from "@/ui/page-loader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";

export interface IAuthContextValue {
	signedIn: boolean;
	signInWithGoogle: () => void;
	signout: () => void;
	user: Profile;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [signedIn, setSignedIn] = useState<boolean>(() => {
		const storageAccessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

		return !!storageAccessToken;
	});

	const queryClient = useQueryClient();

	const { data, isFetching, isSuccess, isError } = useQuery({
		queryKey: ["users", "me"],
		queryFn: authServices.profile,
		enabled: signedIn,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const signInWithGoogle = useCallback(() => {
		setSignedIn(true);
		// toast.info('Entrar com o Google!');
	}, []);

	const signout = useCallback(() => {
		localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
		queryClient.invalidateQueries({
			queryKey: ["users", "me"],
		});
		setSignedIn(false);
		// toast.info('Sair!');
	}, [queryClient]);

	const value = useMemo<IAuthContextValue>(
		() => ({
			signedIn: isSuccess && signedIn,
			signInWithGoogle,
			signout,
			user: {
				name: data?.name || "",
				email: data?.email || "",
				id: data?.id || "",
				picture: data?.picture || "",
			},
		}),
		[signedIn, data, isSuccess, signInWithGoogle, signout],
	);

	useEffect(() => {
		if (isError) {
			signout();
		}
	}, [isError, signout]);

	return (
		<AuthContext.Provider value={value}>
			{isFetching && <PageLoader isLoading={isFetching} />}
			{!isFetching && children}
		</AuthContext.Provider>
	);
}
