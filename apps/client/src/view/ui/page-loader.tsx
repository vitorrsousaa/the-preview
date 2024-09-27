import { Spinner } from "@shared/ui";

interface PageLoaderProps {
	isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
	if (!isLoading) return null;

	return (
		<div className="fixed left-0 top-0 grid h-full w-full place-items-center bg-primary">
			<div className="flex flex-col items-center gap-4">
				{/* <Logo className="text-3xl text-white" /> */}
				<span className="text-white font-semibold text-xl">Carregando...</span>

				<Spinner className="fill-zinc-800 h-14 w-14" />
			</div>
		</div>
	);
}
