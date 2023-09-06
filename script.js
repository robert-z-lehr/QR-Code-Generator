// script.js

// Wrap your code in window.onload to ensure all resources are loaded
window.onload = function() {

  // Display a message to the user indicating that resources are being loaded
  document.body.innerHTML += "<p>Wait please, resources are being loaded.</p>";

  console.log("Page and resources are loaded, starting script...");

  // Function to generate a QR code
  function generateQRCode() {
    console.log("Inside generateQRCode function");

    // Get the QR wrapper element and clear its content
    const qrWrapper = document.getElementById("qrWrapper");
    qrWrapper.innerHTML = "";

    // Retrieve the URL from the input field
    const url = document.getElementById("url-input").value;

    console.log("URL to encode: " + url);

    // Generate the QR code using the qrcode.js library
    new QRCode(qrWrapper, {
      text: url,          // Text to encode
      width: 256,         // Width of the QR code
      height: 256,        // Height of the QR code
      colorDark: "#000000",  // Dark color
      colorLight: "#ffffff", // Light color
      correctLevel: QRCode.CorrectLevel.L  // Error correction level
    });

    console.log("QR code should be generated");
  }

  // Event listener for the 'Download QR Code' button
  document.getElementById("downloadQR").addEventListener("click", function() {
    console.log("Inside downloadQR function");

    // Retrieve the canvas element containing the QR code
    const canvas = document.querySelector("#qrWrapper canvas");

    // Convert the canvas to a PNG data URL
    const imgURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.download = 'QRCode.png';  // File name for downloaded image
    link.href = imgURL;            // Image data as a URL
    link.click();                  // Trigger the download

    console.log("Download should be triggered");
  });
}