import {
	CaretSortIcon,
	DesktopIcon,
	GearIcon,
	HamburgerMenuIcon,
	HomeIcon,
	MobileIcon,
	QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

export interface IconProps {
	name: keyof typeof icons;
	className?: string;
}

const icons = {
	hamburger: HamburgerMenuIcon,
	home: HomeIcon,
	settings: GearIcon,
	question_mark: QuestionMarkCircledIcon,
	double_arrow: CaretSortIcon,
	desktop: DesktopIcon,
	mobile: MobileIcon,
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
