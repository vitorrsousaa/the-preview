import { Poppins, Roboto } from "next/font/google";
import "./styles.css";

const poppins = Poppins({
	weight: ["200", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<body className={` ${roboto.variable} ${poppins.className}`}>
				{children}
			</body>
		</html>
	);
}
