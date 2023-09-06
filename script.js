// Function to generate QR Code
function generateQRCode() {
  // Clear any existing QR Code from the container
  document.getElementById("qrcode").innerHTML = "";

  // Retrieve the URL entered by the user
  const url = document.getElementById("url-input").value;

  // Generate a new QR Code using the library
  new QRCode(document.getElementById("qrcode"), {
    text: url,             // Text to be encoded
    width: 256,            // Width of the QR Code
    height: 256,           // Height of the QR Code
    colorDark: "#000000",  // Dark color for the QR Code
    colorLight: "#ffffff", // Light color for the QR Code
    correctLevel: QRCode.CorrectLevel.L // Error correction level
  });
}

// Event listener for the 'Download QR Code' button
document.getElementById("downloadQR").addEventListener("click", function() {
  // Retrieve the canvas element that holds the QR Code
  const canvas = document.querySelector("#qrcode canvas");

  // Convert the canvas to a downloadable image format (PNG)
  const imgURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  // Create a download link element
  const link = document.createElement("a");

  // Set the link attributes and trigger the download
  link.download = 'QRCode.png';
  link.href = imgURL;
  link.click();
});
