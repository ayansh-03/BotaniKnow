"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

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
      cd: ["CD1", "C2"],
    },
  },
];

export default function Body() {
  const [activeButton, setActiveButton] = useState("Generic");
  const handleButtonClick = (title: string) => {
    setActiveButton(title);
  };

  return (
    <>
      <menu className="flex justify-between mb-[1rem]">
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
      <Card className="min-h-[30vh] px-[1vw] py-[1vh]">
        {data[0][activeButton].description}
        {}
      </Card>
    </>
  );
}
