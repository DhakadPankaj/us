const img1 = "./img/lego-1.png";

const img2 = "./img/lego-2.png";

const img3 = "./img/lego-3.png";

const img4 = "./img/lego-4.png";

const img5 = "./img/lego-5.png";


// define your images here
const images = [ img1,img2, img3, img4, img5];

// get images serially
var getImage = images[Math.floor(Math.random() * images.length)];

// make the URL into a proper image tag
var image = "<img src='" + getImage + "'>";
// append to the div
document.getElementById("valentines-container").innerHTML = image;

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();

});
