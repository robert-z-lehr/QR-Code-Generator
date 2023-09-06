// // Function to generate QR Code
// function generateQRCode() {
//   const qrWrapper = document.getElementById("qrWrapper");
//   console.log("generateQRCode called"); // Add this line for debugging
//   qrWrapper.innerHTML = "";

//   const url = document.getElementById("url-input").value;

//   new QRCode(qrWrapper, {
//     text: url,
//     width: 256,
//     height: 256,
//     colorDark: "#000000",
//     colorLight: "#ffffff",
//     correctLevel: QRCode.CorrectLevel.L
//   });
// }

// Function to generate QR Code
function generateQRCode() {
  const qrWrapper = document.getElementById("qrWrapper");
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Generating QR Code..."; // Add a loading message
  qrWrapper.innerHTML = "";
  qrWrapper.appendChild(loadingMessage); // Add the loading message

  const url = document.getElementById("url-input").value;

  // Simulate a delay (you can remove this in production)
  setTimeout(() => {
    qrWrapper.innerHTML = ""; // Clear the loading message
    new QRCode(qrWrapper, {
      text: url,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L
    });
  }, 1000); // Simulated delay of 1 second (adjust as needed)
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
