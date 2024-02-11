import { AwesomeQR } from "awesome-qr";
import * as fs from "fs/promises";

export async function generateQRCode(urls: string) {
  try {
    // Read the background image file
    const background = await fs.readFile("background.jpg");

    // Generate the QR code
    const buffer = await new AwesomeQR({
      text: urls,
      size: 500,
      backgroundImage: background,
      backgroundDimming: "rgba(0,0,0,0)",
      whiteMargin: true,
      dotScale: 0.2,
      maskPattern: 1,
      autoColor: true
    }).draw();

    // Write the generated QR code to a file
    await fs.writeFile("qrcode.png", buffer);

    console.log("QR code generated successfully!");
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
}

