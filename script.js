// Generate QR Code
function generateQRCode() {
  // Clear previous QR Code
  document.getElementById("qrcode").innerHTML = "";

  // Get the URL
  const url = document.getElementById("url-input").value;

  // Generate new QR Code
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
  });
}
