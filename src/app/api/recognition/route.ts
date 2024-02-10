import { GoogleGenerativeAI } from "@google/generative-ai";

import { NextRequest, NextResponse } from "next/server";
import { promptMap } from "./utils";
import prisma from "@/lib/prisma";

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
  const prompt =
    promptMap[formData.get("user")?.toString() as keyof typeof promptMap];

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
    
    Please provide comprehensive details for each section. If possible, include practical insights and relevant information for farmers, students, and the general audience. If any specific details are unknown, feel free to provide general information or skip that part.the plant info should be atmost 3 lines 
    `;

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = result.response;
    const text = response.text();
    const jsonResponse = JSON.parse(text)
    

    await prisma.plants.create({
      data: {
        name: jsonResponse.name,
        response: jsonResponse.description,
      },
    });

    return NextResponse.json({ msg: "success", jsonResponse  }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
