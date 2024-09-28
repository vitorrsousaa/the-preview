import { ROUTES } from "@/config/routes";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Dashboard } from "@/screens/app/dashboard";
import { Settings } from "@/screens/app/settings";
import { GoogleCallback } from "@/screens/auth/google-callback";
import { Signin } from "@/screens/auth/signin";
import { NotFound } from "@/screens/not-found";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./auth-guard";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthGuard isPrivate={false} />}>
					<Route index element={<Navigate to={ROUTES.SIGNIN} replace />} />
					<Route path={ROUTES.SIGNIN} element={<Signin />} />
					<Route path={ROUTES.GOOGLE_CALLBACK} element={<GoogleCallback />} />
				</Route>
				<Route path="/" element={<AuthGuard isPrivate={true} />}>
					<Route path="/" element={<DashboardLayout />}>
						<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
						<Route path={ROUTES.SETTINGS} element={<Settings />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
