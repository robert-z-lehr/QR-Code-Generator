/**
 * Function to generate QR Code
 * Clears existing QR Code, then creates a new one based on the user's input.
 */
function generateQRCode() {
  // Clear any existing QR Code from the container
  document.getElementById("qrcode").innerHTML = "";
  const qrWrapper = document.getElementById("qrWrapper");
  qrWrapper.innerHTML = "";

  // Retrieve the URL entered by the user
  const url = document.getElementById("url-input").value;

  // Generate a new QR Code using the library
  new QRCode(qrWrapper, {
    text: url,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
  });
}

/**
 * Adds an event listener to the 'Download QR Code' button.
 * Converts the QR code canvas to a PNG and triggers the download.
 */
document.getElementById("downloadQR").addEventListener("click", function() {
  // Retrieve the canvas element containing the QR Code
  const canvas = document.querySelector("#qrcode canvas");

  // Convert the canvas to a PNG data URL
  const imgURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  // Create an anchor element to trigger the download
  const link = document.createElement("a");
  link.download = 'QRCode.png';
  link.href = imgURL;
  link.click();
});
