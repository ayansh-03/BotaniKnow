import localFont from "next/font/local";
const M_BOLD = localFont({
	src: "../../public/fonts/Metropolis Bold.woff2",
	display: "swap",
});
const M_MEDIUM = localFont({
	src: "../../public/fonts/Metropolis Medium.woff2",
	display: "swap",
});
const M_LIGHT = localFont({
	src: "../../public/fonts/Metropolis Light.woff2",
	display: "swap",
});
const M_REGULAR = localFont({
	src: "../../public/fonts/Metropolis.woff2",
	display: "swap",
});

export { M_BOLD, M_MEDIUM, M_LIGHT, M_REGULAR };
