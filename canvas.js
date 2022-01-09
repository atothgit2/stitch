window.addEventListener("load", (e) => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  
  // Resizing
  // resize();

  // ctx.fillRect(10, 10, 100, 100);
  // ctx.strokeStyle = "green";
  // ctx.strokeRect(10, 120, 100, 100);
  // ctx.strokeStyle = "red";
  // ctx.strokeRect(50, 180, 100, 100);

  // ctx.beginPath();
  // ctx.moveTo(120,100);
  // ctx.lineTo(200,200);
  // ctx.lineTo(200,300);
  // ctx.stroke();

  // variables
  let painting = false;

  // functions
  function startPosition(){
    painting = true;
    draw(e);
  }

  function finishedPosition(){
    painting = false;
    ctx.beginPath();
  }

  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clinetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clinetY);
  }

  // eventlisteners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

//window.addEventListener("resize", resize);

////////////////////////////////////////////////////////

// Resizing
// function resize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }
