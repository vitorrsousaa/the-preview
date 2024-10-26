"use client";
import {
	cn,
	Icon,
	Input,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@shared/ui";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePreview } from "./_components/image-preview";
import { TimePreview } from "./_components/time-preview";

const buttonVariants = [
	"default",
	"destructive",
	"outline",
	"secondary",
	"ghost",
	"link",
] as const;

export default function Store(): JSX.Element {
	const [image, setImage] = useState<File | null>(null);
	const [title, setTitle] = useState<string>(
		"Enter your title to see how it looks",
	);

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		maxFiles: 3,
		accept: {
			"image/png": [".png"],
			"image/jpeg": [".jpeg", ".jpg"],
			"image/jpg": [".jpg"],
		},
		onDropAccepted: async (acceptedFiles: File[]) => {
			// const acceptedFilesWithCorrectName = acceptedFiles.map((file) => ({
			// 	...file,
			// 	name: generateNameOfImage(file.name),
			// }));

			const file = acceptedFiles[0];
			if (file) {
				setImage(file);
			}

			// setImage(acceptedFiles)
		},
		multiple: false,
	});

	// o quadradinho de tempo do youtube tem a fonte roboto

	return (
		<div>
			<div className="bg-slate-100/50 flex flex-col items-center justify-center pt-4 pb-4">
				<header className="w-full flex items-center justify-center mb-12">
					<h1 className="text-2xl font-bold">the preview</h1>
				</header>
				<div className="space-y-4">
					<div>
						<span className="text-sm font-medium leading-none">
							Upload thumbnail
						</span>
						<div
							{...getRootProps()}
							className={cn(
								"border h-40 w-80 rounded-md border-dashed transition-colors flex items-center justify-center flex-col cursor-pointer",
								isDragActive && "bg-primary/20",
							)}
						>
							<input {...getInputProps()} />
							<Icon name="desktop" />
							<span className="mt-2">Drop thumbnail image here</span>
							<small className="text-muted-foreground text-center">
								Or click to select a file.
							</small>
							<small className="text-muted-foreground">
								Just PNG, JPG or JPEG.
							</small>
						</div>
					</div>

					<div>
						<span className="text-sm font-medium leading-none">
							Video title
						</span>
						<Input
							type="text"
							placeholder="Enter your title to see how it looks together"
							value={title}
							onChange={handleTextChange}
						/>
					</div>
				</div>
			</div>
			{image && (
				<div className="flex items-center flex-col pt-4 pb-4">
					<Tabs defaultValue="desktop">
						<TabsList className="w-full sm:w-[600px]">
							<TabsTrigger value="desktop" className="w-full">
								{" "}
								<Icon name="desktop" className="mr-2" />
								Desktop
							</TabsTrigger>
							<TabsTrigger value="mobile" className="w-full">
								{" "}
								<Icon name="mobile" className="mr-2" />
								Mobile
							</TabsTrigger>
						</TabsList>
						<TabsContent value="desktop" className="space-y-8">
							<div>
								<small className="text-xl font-semibold">Home large</small>
								<div className="flex flex-col gap-3">
									<div className="w-[360px] h-[202px] relative">
										<ImagePreview image={image} alt="preview-home-large" />
										<TimePreview />
									</div>
									<div className="flex">
										<div className="w-9 h-9 rounded-full bg-blue-400 mr-3 " />
										<div className="w-[360px] max-w-[265px] min-w-[265px] ">
											<h3 className="font-medium text-[16px] font-roboto">
												{title}
											</h3>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-sm font-roboto">
													Channel name
												</span>
												<span className="text-[#606060] text-sm font-roboto">
													123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<small className="text-xl font-semibold">Home small</small>
								<div className="flex flex-col gap-3">
									<div className="w-[240px] h-[135px] relative">
										<ImagePreview image={image} alt="preview-home-small" />
										<TimePreview />
									</div>
									<div className="flex">
										<div className="w-9 h-9 rounded-full bg-blue-400 mr-3 " />
										<div className="w-[240px] max-w-[168px] min-w-[168px]">
											<h1 className="font-medium text-sm font-roboto">
												{title}
											</h1>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-sm font-roboto">
													Channel name
												</span>
												<span className="text-[#606060] text-sm font-roboto">
													123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<small className="text-xl font-semibold">Sidebar</small>
								<div className="flex flex-row gap-3">
									<div className="w-[168px] h-[94px] relative">
										<ImagePreview image={image} alt="preview-sidebar" />
										<TimePreview />
									</div>
									<div className="flex">
										<div className="max-w-[202px] min-w-[202px]">
											<h1 className="font-medium text-sm font-roboto">
												{title}
											</h1>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-xs font-roboto">
													Channel name
												</span>
												<span className="text-[#606060] text-xs font-roboto">
													123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden sm:block">
								<small className="text-xl font-semibold">
									Channel Page: Large
								</small>
								<div className="flex flex-col gap-3">
									<div className="w-[424px] h-[238px] relative">
										<ImagePreview
											image={image}
											alt="preview-channel-page-large"
										/>
										<TimePreview />
									</div>
									<div className="flex">
										<div className="max-w-[400px] min-w-[400px]">
											<h1 className="font-medium text-sm font-roboto">
												{title}
											</h1>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-xs font-roboto">
													123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<small className="text-xl font-semibold">
									Channel Page: Small
								</small>
								<div className="flex flex-col gap-3">
									<div className="w-[210px] h-[117px] relative">
										<ImagePreview
											image={image}
											alt="preview-channel-page-small"
										/>
										<TimePreview />
									</div>
									<div className="flex">
										<div className="max-w-[186px] min-w-[186px]">
											<h1 className="font-medium text-sm font-roboto">
												{title}
											</h1>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-xs font-roboto">
													123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden sm:block">
								<small className="text-xl font-semibold">History</small>
								<div className="flex flex-row gap-3 w-full">
									<div className="flex-shrink-0 w-[246px] h-[138px] relative">
										<ImagePreview image={image} alt="preview-history" />
										<TimePreview />
									</div>
									<div className="flex-grow max-w-[300px] min-w-[300px]">
										<h1 className="font-medium text-lg font-roboto ">
											{title}
										</h1>
										<div className="text-md flex flex-col">
											<span className="text-[#606060] text-xs font-roboto">
												123K Views • 1 hour ago
											</span>
										</div>
										<span className="text-xs font-roboto whitespace-normal leading-0 truncate-lines-2 w-[389px] max-w-[389px] block mt-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</span>
									</div>
								</div>
							</div>
							<div>
								<small className="text-xl font-semibold">
									Watch Later: Large{" "}
								</small>
								<div className="flex flex-row gap-3 w-full">
									<div className="flex-shrink-0 w-[312px] h-[175px] relative">
										<ImagePreview
											image={image}
											alt="preview-watch-later-large"
										/>
										<TimePreview />
									</div>
								</div>
							</div>
							<div className="hidden sm:block">
								<small className="text-xl font-semibold">
									Watch Later: List
								</small>
								<div className="flex flex-row gap-3 w-full">
									<div className="flex-shrink-0 w-[160px] h-[90px] relative">
										<ImagePreview
											image={image}
											alt="preview-watch-later-list"
										/>
										<TimePreview />
									</div>
									<div className="flex-grow max-w-[450px] min-w-[450px]">
										<h1 className="font-medium text-lg font-roboto ">
											{title}
										</h1>
										<div className="text-md flex flex-col">
											<span className="text-[#606060] text-xs font-roboto">
												123K Views
											</span>
										</div>
									</div>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="mobile" className="space-y-8">
							<div>
								<small className="text-xl font-semibold">Home Full Width</small>
								<div className="flex flex-col gap-3">
									<div className="w-[375px] h-[211px] relative">
										<ImagePreview image={image} alt="preview-home-full-width" />
										<TimePreview />
									</div>
									<div className="flex">
										<div className="w-9 h-9 rounded-full bg-blue-400 mr-3 " />
										<div className="max-w-[280px] min-w-[280px] ">
											<h3 className="font-medium text-[16px] font-roboto">
												{title}
											</h3>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-sm font-roboto">
													Channel name • 123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<small className="text-xl font-semibold">Column</small>
								<div className="flex flex-row gap-3">
									<div className="w-[160px] h-[90px] relative">
										<ImagePreview image={image} alt="preview-column" />
										<TimePreview />
									</div>
									<div className="flex">
										<div className="max-w-[150px] min-w-[150px]">
											<h1 className="font-medium text-sm font-roboto">
												{title}
											</h1>
											<div className="text-md flex flex-col">
												<span className="text-[#606060] text-xs font-roboto">
													Channel name
												</span>
												<span className="text-[#606060] text-xs font-roboto">
													123K Views • 1 hour ago
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			)}
		</div>
	);
}
