"use client";
import { Card } from "./ui/card";
import plant from "../../../assets/MainPage/plant_img.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
export default function Hero() {
  const [modal, setModal] = useState("false");

  const showModal = () => {
    setModal("true");
  };
  return (
    <>
      <div className="flex w-screen gap-[4vw] my-[5vw] ">
        <div className="">
          <Image
            src={plant}
            height={135}
            width={125}
            alt="Plant-Img"
            className="flex-none my-0 py-0 "
          />
        </div>
        <div className="flex ">
          <Card className="pt-[0.5rem] px-[0.5rem] ml-[3vw] text-[#163F2C] rounded-[1.3rem] border-none shadow-lg">
            <h1 className="font-bold text-[1.2rem] py-[-10vh] ">Hibiscus</h1>
            <h1 className="text-[0.9rem] text-wrap">Oblangata Hibscuses</h1>
            <Button
              className="bg-[#D1E6DD] text-[#163F2C] hover:bg-[#D1E6DD] hover:text-[#163F2C] rounded-[1rem]  mt-[2vh]"
              onClick={showModal}
            >
              Show QR
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
