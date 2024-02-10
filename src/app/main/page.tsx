"use client";
import Ai from "@/components/ui/main/ai";
import Body from "@/components/ui/main/body";
import Hero from "@/components/ui/main/hero";
import { useState, useEffect } from "react";

export default function Page() {
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const blobText = localStorage.getItem("img");

      if (blobText) {
        try {
          // Set the image data in state
          setImageData(blobText);

          // Trigger download immediately after image data retrieval
		  const blob = new Blob([blobText], { type: "image/png" });
		  
        } catch (error) {
          console.error("Error setting image data:", error);
        }
      } else {
        alert("No image data found in localStorage");
      }
    };

    fetchData();
  }, []);



  return (
    <div className="flex flex-col mx-[5vw]">
      <Hero />
      <Body />
      <Ai />
    </div>
  );
}