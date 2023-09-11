// Function to generate QR Code
function generateQRCode() {
  const qrWrapper = document.getElementById("qrWrapper");
  qrWrapper.innerHTML = ""; // Clear existing content

  const url = document.getElementById("url-input").value;
  const qrCode = new QRCode(qrWrapper, {
    text: url,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
  });

  // Append the generated QR code canvas to qrWrapper
  qrWrapper.appendChild(qrCode._el);
}


// Event listener for the 'Download QR Code' button
document.getElementById("downloadQR").addEventListener("click", function() {
  const canvas = document.querySelector("#qrWrapper canvas");
  console.log("Download QR Code button clicked"); // Add this line for debugging

  const imgURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  const link = document.createElement("a");
  link.download = 'QRCode.png';
  link.href = imgURL;
  link.click();
});
