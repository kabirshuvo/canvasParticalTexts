window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(ctx);

  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();

  // const text = 'Amraow :) ';
  // const textX = canvas.width/2;
  // const textY = canvas.height/2;

  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "white";

  ctx.font = "120px Helvitica";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // ctx.fillText(text, textX, textY);
  // ctx.strokeText(text, textX, textY);

  function wrapText(text) {
    let linesArray = [];
    let lineCounter = 0;
    let line = "";
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + "";
      console.log(ctx.measureText(testLine).width);
      ctx.fillText(testLine, canvas.width / 2, canvas.height / 2 + i * 120);
    }
  }
  wrapText("aaa bbb ccc");
});
