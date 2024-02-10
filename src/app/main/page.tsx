"use client";
import Ai from "@/components/ui/main/ai";
import Body from "@/components/ui/main/body";
import Hero from "@/components/ui/main/hero";
import { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		const item = localStorage.getItem("img");
		const blobText = item ? JSON.parse(item) : null;

		if (blobText) {
			const filename = "image-" + Date.now() + ".jpg";

			const imageUrl = URL.createObjectURL(blobText);

			const link = document.createElement("a");
			link.href = imageUrl;
			link.download = filename;
			console.log(link);

			link.click();

			URL.revokeObjectURL(imageUrl);
		} else {
			// Handle the case where there is no data in localStorage
			alert("No image data found in localStorage");
		}
	}, []);

	return (
		<div className="flex flex-col mx-[5vw] ">
			<Hero />
			<Body />
			<Ai />
		</div>
	);
}
