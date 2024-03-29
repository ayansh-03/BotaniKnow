import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { NextRequest, NextResponse } from "next/server";

async function fileToGenerativePart(fileEntry: FormDataEntryValue) {
  const file =
    fileEntry instanceof File ? fileEntry : (fileEntry as unknown as File);

  const buffer = Buffer.from(await file.arrayBuffer());
  return {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType: file.type,
    },
  };
}

// Access your API key as an environment variable
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const imageParts = [await fileToGenerativePart(file)];
  const API_KEY = process.env.API_KEY!;
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt: string = `Generate detailed information about a plant. Include the following sections
    {
      "name": "<plant_name>",
      "info": "<plant_info>",
      "description": {
        "scientificName":"<plant_scientific_name>",
        "farmer": {
          "howToGrow": "",
          "requiredManure": "",
          "favorableConditions": "",
          "price": "",
          "yield": "",
          "costOfCultivation": ""
        },
        "student": {
          "uses": "",
          "medicinalProperties": "",
          "storageConditions": ""
        },
        "generic": {
          "facts": "",
          "medicinalProperties": ""
        }
      }
    }
    
    Please provide comprehensive details for each section. If possible, include practical insights and relevant information for farmers, students, and the general audience. If any specific details are unknown, feel free to provide general information or skip that part.the plant info should be atmost 3 lines . the price should be per kg only number , and the cost of cultivation must be a number , yield must be for per year
    `;

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = result.response;
    const text = response.text();
    const jsonResponse = JSON.parse(text);
    console.log('====================================');
    console.log("Parsed Text ",jsonResponse);
    console.log('====================================');
    const exist = await prisma.plant.findUnique({
      where: {
        name: jsonResponse.name,
      }
    })
    if(!exist){
      await prisma.plant.create({
        data:{
          name: jsonResponse.name,
          response: jsonResponse.description
        }
      })
    }
    


    return NextResponse.json({ msg: "success", jsonResponse }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
