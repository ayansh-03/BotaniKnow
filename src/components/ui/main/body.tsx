"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { data } from "./data";
import bullet from "/public/Images/Glyph_ undefined.svg";
import Image from "next/image";
import prisma from "@/lib/prisma";

interface DescriptionCommon {
	medicinalProperties: string;
}

interface FarmerDescription extends DescriptionCommon {
	howToGrow: string;
	requiredManure: string;
	favorableConditions: string;
	price: string;
	yield: string;
	costOfCultivation: string;
}

interface StudentDescription extends DescriptionCommon {
	uses: string;
	storageConditions: string;
}

interface GenericDescription extends DescriptionCommon {
	facts: string;
}

interface PlantDescription {
	farmer: FarmerDescription;
	student: StudentDescription;
	generic: GenericDescription;
}

interface Data {
	msg: string;
	jsonResponse: {
		name: string;
		info: string;
		description: PlantDescription;
	};
}



interface BodyProps{
	plant: string
}

export default function Body(props: BodyProps) {
	
	const [data, setData] = useState<Data>();

	useEffect(() => {
		async function fetchPlant() {
			const data = await prisma.plants.find({
				where:{name : props.plant}
			})
			
			const result = await data.json()
			console.log(result);

			setData(result.response)


		}	
		fetchPlant()
	},);
	const [activeButton, setActiveButton] = useState("Generic");
	const facts = data?.jsonResponse.description.generic.facts.split(".");
	const medicinalProperties =
		data?.jsonResponse.description.generic.medicinalProperties.split(".");
	const howToGrow =
		data?.jsonResponse.description.farmer.howToGrow.split("/(?<!d.d)\n/");

	const fertilizersAndConditons =
		data?.jsonResponse.description.farmer.favorableConditions.split(".");
	const yield_ = data?.jsonResponse.description.farmer.yield;
	const CostOfCult = data?.jsonResponse.description.farmer.costOfCultivation;

	const uses = data?.jsonResponse.description.student.uses.split(".");
	const medicinalProperties_s =
		data?.jsonResponse.description.student.medicinalProperties.split(".");
	const st_cond = data?.jsonResponse.description.student.storageConditions.split(".");

	const handleButtonClick = (title: string) => {
		setActiveButton(title);
	};

	return (
		<>
			<menu className="flex justify-between my-[1rem]">
				<Button
					className={`${
						activeButton === "Generic"
							? "text-md p-5 tracking-wider bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
							: "text-md p-5 tracking-wider bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
					} rounded-[0.7rem]`}
					onClick={() => handleButtonClick("Generic")}
				>
					Generic
				</Button>
				<Button
					className={`${
						activeButton === "Farmer"
							? "text-md p-5 tracking-wider bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
							: "text-md p-5 tracking-wider bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
					} rounded-[0.7rem]`}
					onClick={() => handleButtonClick("Farmer")}
				>
					Farmer
				</Button>

				<Button
					className={`${
						activeButton === "Student"
							? "text-md p-5 tracking-wider bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
							: "text-md p-5 tracking-wider bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
					} rounded-[0.7rem]`}
					onClick={() => handleButtonClick("Student")}
				>
					Student
				</Button>
			</menu>
			<Card className="min-h-[30vh] p-7 text-wrap rounded-[2rem] border-none shadow-lg">
				<h2 className="text-xl py-2">Description</h2>
				<p className="light-M">{data?.jsonResponse.info}</p>
				{activeButton === "Generic" ? (
					<>
						<h2 className="text-xl py-2">Facts</h2>
						<ul>
							{data?.jsonResponse.description.generic.facts.split(".").map(
								(sentence, index) =>
									sentence !== "" && (
										<li key={index} className="py-2 light-M">
											<Image
												alt="Bullet"
												src={bullet}
												width={20}
												className="inline"
											/>
											{"  "}
											<span className="font-thin leading-3 light-M">
												{sentence}
											</span>
										</li>
									)
							)}
						</ul>
						<br />
						<h2 className="text-xl py-2">Medicinal Properties</h2>
						<ul>
							{data?.jsonResponse.description.student.medicinalProperties
								.split(".")
								.map(
									(sentence, index) =>
										sentence !== "" && (
											<li key={index} className="py-2 light-M">
												<Image
													alt="Bullet"
													src={bullet}
													width={20}
													className="inline"
												/>
												{"   "}
												<span className="font-thin leading-3 light-M">
													{sentence}
												</span>
											</li>
										)
								)}
						</ul>
					</>
				) : activeButton === "Farmer" ? (
					<>
						<h2 className="text-xl py-2 bold-M">Steps to grow</h2>
						<ul>
							{data?.jsonResponse.description.farmer.howToGrow.split(".").map(
								(sentence, index) =>
									sentence !== "" && (
										<li key={index} className="py-2 light-M">
											<Image
												alt="Bullet"
												src={bullet}
												width={20}
												className="inline"
											/>
											{"  "}
											<span className="font-thin leading-3 light-M">
												{sentence}
											</span>
										</li>
									)
							)}
						</ul>
						<h2 className="text-xl py-2">Fertilizers and Conditions</h2>
						<ul>
							{data?.jsonResponse.description.farmer.requiredManure
								.split(".")
								.map(
									(sentence, index) =>
										sentence !== "" && (
											<li key={index} className="py-2 light-M">
												<Image
													alt="Bullet"
													src={bullet}
													width={20}
													className="inline"
												/>
												{"  "}
												<span className="font-thin leading-3 light-M">
													{sentence}
												</span>
											</li>
										)
								)}
						</ul>
						<h2 className="text-xl py-2">Yield</h2>
						<p className="light-M py-2">{yield_}</p>
						<h2 className="text-xl py-2">Cost of Cultivation</h2>
						<p className="light-M py-2">{CostOfCult}</p>
					</>
				) : (
					<>
						<h2 className="text-xl py-2">Uses</h2>
						<ul>
							{data?.jsonResponse.description.student.uses.split(".").map(
								(sentence, index) =>
									sentence !== "" && (
										<li key={index} className="py-2 light-M">
											<Image
												alt="Bullet"
												src={bullet}
												width={20}
												className="inline"
											/>
											{"  "}
											<span className="font-thin leading-3 light-M">
												{sentence}
											</span>
										</li>
									)
							)}
						</ul>
						<h2 className="text-xl py-2">Medicinal Properties</h2>
						<ul>
							{data?.jsonResponse.description.student.medicinalProperties
								.split(".")
								.map(
									(sentence, index) =>
										sentence !== "" && (
											<li key={index} className="py-2 light-M">
												<Image
													alt="Bullet"
													src={bullet}
													width={20}
													className="inline"
												/>
												{"  "}
												<span className="font-thin leading-3 light-M">
													{sentence}
												</span>
											</li>
										)
								)}
						</ul>
						<h2 className="text-xl py-2">Storage Conditions</h2>
						<ul>
							{data?.jsonResponse.description.student.storageConditions.split(".").map(
								(sentence, index) =>
									sentence !== "" && (
										<li key={index} className="py-2 light-M">
											<Image
												alt="Bullet"
												src={bullet}
												width={20}
												className="inline"
											/>
											{"  "}
											<span className="font-thin leading-3 light-M">
												{sentence}
											</span>
										</li>
									)
							)}
						</ul>
					</>
				)}
			</Card>
		</>
	);
}
