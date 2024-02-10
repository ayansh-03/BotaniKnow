const { AwesomeQR } = require("awesome-qr");
const fs = require("fs");

async function generateQRCode() {
    try {
        // Read the background image file
        const background = fs.readFileSync("background.png");

        // Generate the QR code
        const buffer = await new AwesomeQR({
            text: "AwesomeQR by Makito - Awesome, right now.",
            size: 500,
            backgroundImage: background,
            backgroundDimming: "rgba(0,0,0,0)",
            whiteMargin:true,
            dotScale: 0.2,
            maskPattern: 1,
            autoColor: true
        }).draw();

        // Write the generated QR code to a file
        fs.writeFileSync("qrcode.png", buffer);

        console.log("QR code generated successfully!");
    } catch (error) {
        console.error("Error generating QR code:", error);
    }
}

// Call the function to generate the QR code
generateQRCode();
