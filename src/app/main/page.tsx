"use client";
import Ai from "@/components/ui/main/ai";
import Body from "@/components/ui/main/body";
import Hero from "@/components/ui/main/hero";
import { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		const blobText = localStorage.getItem("img");

		if (blobText) {
			const imgElement = new Image();

			imgElement.src = blobText;

			//& API CALL.
			console.log("API CALL --> ", imgElement);
		} else {
			// Handle the case where there is no data in localStorage
			alert("No image data found in localStorage");
		}
	}, []);

	return (
		<div className="flex flex-col mx-[5vw]">
			<Hero />
			<Body />
			<Ai />
		</div>
	);
}
