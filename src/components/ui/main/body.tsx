"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

import bullet from "/public/Images/Glyph_ undefined.svg";
import Image from "next/image";

import Hero from "./hero";

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
  name: string;
  response: {
	scientificName:string,
    farmer: FarmerDescription;
    generic: GenericDescription;
    student: StudentDescription;
  };
}

interface BodyProps {
  plant: string;
}

export default function Body(props: BodyProps) {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    async function fetchPlant() {
      const data = await fetch("/api/plant", {
        method: "POST",
        body: JSON.stringify({ name: props.plant }),
      });
      //   console.log(data);
      const result = await data.json();
      console.log("====================================");
      console.log(result);
      console.log("====================================");

      setData(result);
    }
    fetchPlant();
  }, []);
  const [activeButton, setActiveButton] = useState("Generic");

  const handleButtonClick = (title: string) => {
    setActiveButton(title);
  };

  return (
    <>
      <Hero name={data?.name!} scientificName={data?.response.scientificName!} />
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
        {/* <p className="light-M">{data?.response.}</p> */}
        {activeButton === "Generic" ? (
          <>
            <h2 className="text-xl py-2">Facts</h2>
            <ul>
              {data?.response.generic?.facts?.split(".").map(
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
              {data?.response.student?.medicinalProperties?.split(".").map(
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
              {data?.response.farmer.howToGrow.split(".").map(
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
              {data?.response.farmer.requiredManure.split(".").map(
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
            <p className="light-M py-2">{data?.response.farmer.yield}</p>
            <h2 className="text-xl py-2">Cost of Cultivation</h2>
            <p className="light-M py-2">
              {data?.response.farmer.costOfCultivation}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl py-2">Uses</h2>
            <ul>
              {data?.response.student.uses.split(".").map(
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
              {data?.response.student.medicinalProperties.split(".").map(
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
              {data?.response.student.storageConditions.split(".").map(
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
