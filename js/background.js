const images = ["0.jpg", "1.jpg", "2.jpg"];

// Select a random image from the images array
const chosenImage = images[Math.floor(Math.random() * images.length)];

// Set the background image of the body
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
