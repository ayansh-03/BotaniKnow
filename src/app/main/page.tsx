"use client";
import Ai from "@/components/ui/main/ai";
import Body from "@/components/ui/main/body";
import { useSearchParams } from "next/navigation";

export default function Page() {
	const searchP = useSearchParams();
	const search = searchP.get("plant");
	return (
		<div className="flex flex-col mx-[5vw] ">
			{/* <Hero /> */}
			<Body plant={search!} />
			<Ai />
		</div>
	);
}
