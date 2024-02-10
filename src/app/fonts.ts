import localFont from "next/font/local";
const M_BOLD = localFont({
	src: "../../public/fonts/Metropolis Bold.woff2",
	display: "swap",
	variable: "--font-M_BOLD",
});
const M_MEDIUM = localFont({
	src: "../../public/fonts/Metropolis Medium.woff2",
	display: "swap",
	variable: "--font-M_MEDIUM",
});
const M_LIGHT = localFont({
	src: "../../public/fonts/Metropolis Light.woff2",
	display: "swap",
	variable: "--font-M_LIGHT",
});
const M_REGULAR = localFont({
	src: "../../public/fonts/Metropolis.woff2",
	display: "swap",
	variable: "--font-M_REGULAR",
});

export { M_BOLD, M_MEDIUM, M_LIGHT, M_REGULAR };
