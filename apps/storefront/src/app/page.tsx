"use client";
import { Input, Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui";
import { useState } from "react";
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

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			console.log("oir");
			setImage(file);
		}
	};

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	// o quadradinho de tempo do youtube tem a fonte roboto

	return (
		<div>
			<div className="bg-slate-400 flex flex-col items-center justify-center pt-4 pb-4">
				<header className="w-full flex items-center justify-center mb-12">
					<h1>the preview</h1>
				</header>
				<div className="space-y-4">
					<Input type="file" onChange={handleFileChange} />
					<Input
						type="text"
						placeholder="Enter your title to see how it looks together"
						value={title}
						onChange={handleTextChange}
					/>
				</div>
			</div>
			{image && (
				<div className="flex items-center flex-col pt-4 pb-4">
					<Tabs defaultValue="desktop" className="w-[400px]">
						<TabsList>
							<TabsTrigger value="desktop">Desktop</TabsTrigger>
							<TabsTrigger value="mobile">Mobile</TabsTrigger>
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
							<div>
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
							<div>
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
							<div>
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
