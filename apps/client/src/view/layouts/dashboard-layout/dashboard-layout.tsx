import { Button, Icon, Sheet, SheetContent, SheetTrigger } from "@shared/ui";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar";

export function DashboardLayout() {
	return (
		<div className="bg-muted/10 p-2">
			<div className="max-md:hidden block">
				<Sidebar />
			</div>

			<Sheet>
				<SheetTrigger className="md:hidden flex">
					<Button variant="ghost">
						<Icon name="hamburger" className="h-6 w-6" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Sidebar />
				</SheetContent>
			</Sheet>

			<div className="md:pl-[280px] md:py-4 flex min-h-screen w-full flex-col">
				<main className="p-4 md:px-6 md:py-0 min-h-screen max-w-4xl w-full m-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
