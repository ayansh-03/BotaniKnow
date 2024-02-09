"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";
import arrow from "../../../assets/MainPage/Vector.svg";
const data = [
  {
    Generic: {
      description: "This is the description of data",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    Student: {
      description: "This is the description of data",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    Farmer: {
      description: "This is the description of data",
      stepsToGrow: ["Step 1", "Step 2", "Step 3"],
      fertilizers: ["Fertilizer 1", "Fertilizer 2"],
      cd: ["CD1", "CD2"],
    },
  },
];

export default function Body() {
  const [activeButton, setActiveButton] = useState("Student");
  const handleButtonClick = (title: string) => {
    setActiveButton(title);
  };

  return (
    <>
      <menu className="flex justify-between my-[1rem]">
        <Button
          className={
            activeButton === "Generic"
              ? "bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color "
              : "bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
          }
          onClick={() => handleButtonClick("Generic")}
        >
          Generic
        </Button>
        <Button
          className={
            activeButton === "Farmer"
              ? "bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
              : "bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
          }
          onClick={() => handleButtonClick("Farmer")}
        >
          Farmer
        </Button>

        <Button
          className={
            activeButton === "Student"
              ? "bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
              : "bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
          }
          onClick={() => handleButtonClick("Student")}
        >
          Student
        </Button>
      </menu>
      <Card className="min-h-[30vh] px-[5vw] py-[1vh] text-wrap">
        {activeButton === "Student" ? (
          <div>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">
              Description
            </h1>
            <p className="text-[0.9rem] text-[#163F2C]">
              {data[0].Student.description}
            </p>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">Benefits</h1>

            <ul>
              {data[0].Generic.benefits.map((item, key) => (
                <li className="text-[0.9rem] text-[#163F2C] flex" key={key}>
                  <Image src={arrow} alt="Arrow" className="mr-[1vw]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : activeButton === "Generic" ? (
          <div>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">
              Description
            </h1>
            <p className="text-[0.9rem] text-[#163F2C]">
              {data[0].Generic.description}
            </p>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">Benefits</h1>
            <ul>
              {data[0].Generic.benefits.map((item, key) => (
                <li className="text-[0.9rem] text-[#163F2C] flex " key={key}>
                  <Image src={arrow} alt="Arrow" className="mr-[1vw]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">
              Description
            </h1>
            <p className="text-[0.9rem] text-[#163F2C]">
              {data[0].Farmer.description}
            </p>

            <h1 className="text-[1rem] text-[#163F2C] font-bold">
              Steps to Grow
            </h1>
            <ul>
              {data[0].Farmer.stepsToGrow.map((item, key) => (
                <li key={key} className="text-[0.9rem] text-[#163F2C] flex">
                  <Image src={arrow} alt="Arrow" className="mr-[1vw]" />
                  {item}
                </li>
              ))}
            </ul>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">
              Fertilizers and Conditions
            </h1>
            <ul>
              {data[0].Farmer.fertilizers.map((item, key) => (
                <li className="text-[0.9rem] text-[#163F2C] flex" key={key}>
                  <Image src={arrow} alt="Arrow" className="mr-[1vw]" />
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              {data[0].Farmer.cd.map((item, key) => (
                <li className="text-[0.9rem] text-[#163F2C] flex " key={key}>
                  <Image src={arrow} alt="Arrow" className="mr-[1vw]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {}
      </Card>
    </>
  );
}
