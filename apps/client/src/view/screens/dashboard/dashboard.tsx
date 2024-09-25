import { Button } from "@shared/ui";
import toast from "react-hot-toast";
import viteLogo from "/vite.svg";

const buttonVariants = [
	"default",
	"destructive",
	"outline",
	"secondary",
	"ghost",
	"link",
] as const;

export function Dashboard() {
	return (
		<div className="mt-8 items-center space-y-4">
			<div className="flex w-full justify-center text-3xl font-bold gap-2">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				Vite + React
			</div>
			<div className="flex w-full justify-center space-x-4">
				<ul className="items-center space-y-1 md:inline-flex md:space-x-1 md:space-y-0">
					{buttonVariants.map((variant) => (
						<li key={variant}>
							<Button
								variant={variant}
								className="capitalize"
								onClick={() => toast.success(variant)}
							>
								{variant}
							</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
