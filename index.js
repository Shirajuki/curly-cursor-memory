console.log("test");
const circle = document.getElementById("customCursorCircle");
const dot = document.getElementById("customCursorDot");
console.log(circle);

// Arrow function
const handleMouseMovement = (event) => {
  // Cursors position
  const x = event.clientX;
  const y = event.clientY;
  if (event.target.getAttribute("data-hide-cursor") === "true") {
    dot.style.opacity = 0;
    circle.style.width = "45px";
    circle.style.height = "45px";
  } else {
    dot.style.opacity = 1;
    circle.style.width = "30px";
    circle.style.height = "30px";
  }
  // Moves the circle
  circle.style.transform = `translate(${x - circle.offsetWidth / 2}px, ${
    y - circle.offsetHeight / 2
  }px)`;
  dot.style.transform = `translate(${x - 2.5}px, ${y - 2.5}px)`;
};
// Eventlistener - input
window.addEventListener("mousemove", handleMouseMovement); // Callback function
