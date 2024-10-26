interface ImagePreviewProps {
	image: File;
	alt: string;
}

export function ImagePreview(props: ImagePreviewProps) {
	const { alt, image } = props;
	return (
		<img
			src={URL.createObjectURL(image)}
			alt={alt}
			width={360}
			height={202}
			className="w-full h-full aspect-video rounded-xl "
		/>
	);
}
