"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";
import arrow from "../../../assets/MainPage/Vector.svg";
const data = [
  {
    name: "Amla",
    scientific: "Emblica officinalis",
    description:
      "Amla, also known as Indian gooseberry, is a deciduous tree native to India. It is a small to medium-sized tree, growing up to 15 meters (49 feet) tall. The leaves are dark green, pinnate, and 10-20 centimeters (3.9-7.9 inches) long. The flowers are small, greenish-yellow, and borne in clusters. The fruit is a round, fleshy drupe, about the size of a ping-pong ball. It is green when unripe and turns yellow or orange when ripe. The fruit is edible and has a sour taste.",

    Generic: {
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    Student: {
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    Farmer: {
      stepsToGrow: [
        " Amla can be grown from seed or from cuttings.",
        " The seeds are small and should be planted in a well-drained soil mix.",
        " The cuttings should be taken from healthy trees and planted in a similar soil mix.",
        " The trees need full sun and well-drained soil. ",
        "They are drought-tolerant and can withstand temperatures as low as -10 degrees Celsius (14 degrees Fahrenheit).",
      ],
      fertilizers: [
        "Amla trees benefit from the application of manure or compost. They also need regular watering, especially during the dry season",
      ],
      cd: ["CD1", "CD2"],
    },
  },
];

export default function Body() {
  const [activeButton, setActiveButton] = useState("Farmer");
  const handleButtonClick = (title: string) => {
    setActiveButton(title);
  };

  return (
    <>
      <menu className="flex justify-between my-[1rem]">
        <Button
          className={`${
            activeButton === "Generic"
              ? "bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color "
              : "bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
          } rounded-[1rem]`}
          onClick={() => handleButtonClick("Generic")}
        >
          Generic
        </Button>
        <Button
          className={`${
            activeButton === "Farmer"
              ? "bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
              : "bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
          } rounded-[1rem]`}
          onClick={() => handleButtonClick("Farmer")}
        >
          Farmer
        </Button>

        <Button
          className={`${
            activeButton === "Student"
              ? "bg-gradient-to-br from-t1-color via-t5-color to-main-color text-secondary-color"
              : "bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C]"
          } rounded-[1rem]`}
          onClick={() => handleButtonClick("Student")}
        >
          Student
        </Button>
      </menu>
      <Card className="min-h-[30vh] px-[5vw] py-[1vh] text-wrap rounded-[2rem] border-none shadow-lg">
        {activeButton === "Student" ? (
          <div className="p-3">
            <h1 className="text-[1.4rem] text-[#163F2C] font-bold">
              Description
            </h1>
            <p className="text-[0.9rem] text-[#163F2C]">
              {data[0].Student.description}
            </p>
            <h1 className="text-[1.4rem] text-[#163F2C] font-bold">Benefits</h1>

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
          <div className="p-3">
            <h1 className="text-[1.4rem] text-[#163F2C] font-bold">
              Description
            </h1>
            <p className="text-[0.9rem] text-[#163F2C]">
              {data[0].Generic.description}
            </p>
            <h1 className="text-[1rem] text-[#163F2C] font-bold">Benefits</h1>
            <ul>
              {data[0].Generic.benefits.map((item, key) => (
                <li className="text-[1rem] text-[#163F2C] flex " key={key}>
                  <Image src={arrow} alt="Arrow" className="mr-[1vw]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="p-3">
            <h1 className="text-[1.2rem] text-[#163F2C] font-bold">
              Description
            </h1>
            <p className="text-[0.9rem] text-[#163F2C] font-extralight">
              {data[0].Farmer.description}
            </p>

            <h1 className="text-[1.2rem] text-[#163F2C] font-bold">
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
            <h1 className="text-[1.2rem] text-[#163F2C] font-bold">
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
