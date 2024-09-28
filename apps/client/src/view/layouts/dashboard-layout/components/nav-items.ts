import { ROUTES } from "@/config/routes";
import type { IconProps } from "@shared/ui";

interface NavSectionsProps {
	label: string;
	items: NavItemsProps[];
}

interface NavItemsProps {
	href: string;
	icon: IconProps["name"];
	label: string;
}

export const NAV_ITEMS: NavSectionsProps[] = [
	{
		label: "Geral",
		items: [
			{
				href: ROUTES.DASHBOARD,
				icon: "home",
				label: "Página Inicial",
			},
		],
	},
	{
		label: "Minha conta",
		items: [
			{ href: ROUTES.SETTINGS, icon: "settings", label: "Configurações" },
		],
	},
];
