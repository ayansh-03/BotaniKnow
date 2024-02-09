import { Card } from "./ui/card";
import plant from "../../../assets/MainPage/plant_img.png";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex w-screen gap-[5vw] my-[5vw] ">
        <div className="">
          <Image
            src={plant}
            height={135}
            width={125}
            alt="Plant-Img"
            className="flex-none my-0 py-0"
          />
        </div>
        <div className="flex ">
          <Card className=" rounded-2xl pt-[0.5rem] px-[0.5rem] text-[#163F2C]">
            <h1 className="font-bold text-[1.2rem] py-[-10vh] ">Hibiscus</h1>
            <h1 className="text-[0.9rem] text-wrap">Oblangata Hibscuses</h1>
          </Card>
        </div>
      </div>
    </>
  );
}
