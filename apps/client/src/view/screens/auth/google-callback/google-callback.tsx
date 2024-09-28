import { ROUTES } from "@/config/routes";
import { authServices } from "@/services/auth";
import { tokenStorage } from "@/storage/token-storage";
import { PageLoader } from "@/ui/page-loader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function GoogleCallback() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const code = queryParams.get("code");

	const error = queryParams.get("error");

	const navigate = useNavigate();

	useEffect(() => {
		async function load() {
			if (error) {
				navigate(ROUTES.SIGNIN);
				return;
			}

			try {
				const { token } = await authServices.googleSignin({ code: code || "" });

				tokenStorage.set(token);

				window.location.href = "/dashboard";
				// toast.success('Login efetuado com sucesso')
			} catch {
				navigate(ROUTES.SIGNIN);
				// toast.error('Erro ao autenticar com o Google')
			}
		}

		load();
	}, [code, error, navigate]);

	return <PageLoader isLoading />;
}
