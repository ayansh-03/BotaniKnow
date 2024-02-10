import { Card } from "./ui/card";

export default function Ai() {
	return (
		<>
			<Card className="min-h-[10vh] mt-[1rem] mb-[10rem] px-[1vw] py-[1vh] border-none shadow-lg rounded-[1.4rem]">
				<iframe
					src="https://dialoquebase.onrender.com/bot/ab03f643-53ff-47dc-b8c2-f15361fa2f3c?mode=iframe"
					width="100%"
					height="400px"
				></iframe>
			</Card>
		</>
	);
}
