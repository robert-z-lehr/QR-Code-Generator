function generateQRCode() {
    if (window.innerWidth <= 600) {
        document.body.style.fontSize = "18px";
      }      
    
    // Clear previous QR Code
    document.getElementById("qrcode").innerHTML = "";
  
    // Get the URL
    const url = document.getElementById("url-input").value;
  
    // Generate new QR Code
    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 512,
      height: 512,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L
    });
  }
  