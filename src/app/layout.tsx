import type { Metadata } from "next";
import { Overpass_Mono } from "next/font/google"
import "./globals.css";

const overpassMono = Overpass_Mono({ subsets: ["latin"], variable: "--font-overpass" })

export const metadata: Metadata = {
	title: "kalidoss.dev"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${overpassMono.variable} font-mono`}>
				{children}
			</body>
		</html>
	);
}
