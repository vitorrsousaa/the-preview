import {
	CaretSortIcon,
	GearIcon,
	HamburgerMenuIcon,
	HomeIcon,
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
	questionMark: QuestionMarkCircledIcon,
	double_arrow: CaretSortIcon,
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
