import Image from "next/image";
import P1 from "/public/images/P1.svg";
import UpperStem from "/public/images/Upper Stem.svg";
import Server from "/public/images/Server.svg";
import LowerStem from "/public/images/Lower Stem.svg";
import Result from "/public/images/Result.svg";
export default function Home() {
	return (
		<>
			{/* Hero Section*/}
			<section className="px-10 py-5 h-96 flex justify-center items-center bg-gradient-to-br from-t1-color via-t5-color to-main-color">
				<div className="flex justify-center flex-col align-middle gap-8">
					<h1 className="text-4xl align-middle font-extrabold text-center text-pretty text-secondary-color">
						Welcome to <br />
						Botani-Know!
					</h1>
					<label className="border-2 rounded-[25px] py-3 px-14 min-w-64 bg-landing-btn-color font-extralight font text-wrap text-center text-main-color cursor-pointer">
						<input
							id="cameraInput"
							className="hidden"
							type="file"
							accept="image/*"
							required
						/>
						Scan Now!
					</label>
				</div>
			</section>

			{/* Process Flow*/}
			<section className="flex justify-center items-center p-6 flex-col">
				<h2 className="text-2xl">How it works?</h2>
				<div className="py-10 w-[100%]">
					<div className="flex justify-start items-center my-0">
						<Image alt="P1" src={P1} width={150} className="mr-6" />
						<h3 className="text-1xl align-bottom text-center ">Capture</h3>
					</div>
					<div className="mx-auto pl-8">
						<Image alt="UpperStem" src={UpperStem} width={250} />
					</div>
					<div className="ml-auto flex justify-end items-center">
						<h3 className="text-1xl mr-6 align-bottom text-center">Process</h3>
						<Image alt="Server" src={Server} width={150} />
					</div>
					<div className="mx-auto pl-8">
						<Image alt="LowerStem" src={LowerStem} width={250} />
					</div>
					<div className="my-0 flex justify-start items-center">
						<Image
							alt="Result"
							src={Result}
							width={150}
							className="mr-6 bg-white"
						/>
						<h3 className="text-1xl align-bottom text-center">Result</h3>
					</div>
				</div>
			</section>
		</>
	);
}
