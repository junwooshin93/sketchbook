const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js-controls__color");
const range = document.getElementById("js-range");
const mode = document.getElementById("js-mode");

canvas.width = 600;
canvas.height = 600;

ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "";
ctx.lineWidth = "2.5";

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    const strokeThick = event.target.value;
    ctx.lineWidth = strokeThick;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if (colors) {
    Array.from(colors).forEach((color) =>
        color.addEventListener("click", handleColorClick)
    );
}

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}
