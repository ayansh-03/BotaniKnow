import type { Metadata } from "next";
import "./globals.css";
import { BlobProvider } from "./context";
import { M_BOLD, M_REGULAR, M_LIGHT, M_MEDIUM } from "./fonts";

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "Botani Know",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${M_BOLD.variable} ${M_LIGHT.variable} ${M_MEDIUM.variable} ${M_REGULAR.variable}`}
		>
			<BlobProvider>
				<body className={`${M_BOLD.className} bg-[#F5F5F7]`}>{children}</body>
			</BlobProvider>
		</html>
	);
}
