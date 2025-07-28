const images = [
    "image0.png",
    "image1.png",
    "image3.png",
    "image2.png",
    "image5.jpg",
    "image4.jpg",
    "image6.jpg",
    "image7.jpg"
];

let index = 0;

const backwardsButton = document.getElementById("backward");
const forwardsButton = document.getElementById("forward");
const currentSlide = document.getElementById("slide");

backwardsButton.textContent = "<";
forwardsButton.textContent = ">";

function setImage() {
    currentSlide.src = images[index];
}

function alterIndex(direction) {
    index += direction;
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    setImage();
}

backwardsButton.addEventListener("click", () => {
    alterIndex(-1);
});

forwardsButton.addEventListener("click", () => {
    alterIndex(1);
});

setInterval(alterIndex, 5000, 1);