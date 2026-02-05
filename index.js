const img1 = "./img/lego-1.png";

const img2 = "./img/lego-2.png";

const img3 = "./img/lego-3.png";

const img4 = "./img/lego-4.png";

const img5 = "./img/lego-5.png";


// define your images here
const images = [ img1,img2, img3, img4, img5];

// Create image element and button if not present

const valentinesContainer = document.getElementById('valentines-container');
const refreshButton = document.getElementById('refreshButton');

let currentIndex = 0;

function showImage(index) {
    valentinesContainer.innerHTML = '';
    const imgElem = document.createElement('img');
    imgElem.src = images[index];
    imgElem.alt = `Lego Valentine ${index + 1}`;
    imgElem.className = 'lego-img';
    valentinesContainer.appendChild(imgElem);
}

showImage(currentIndex);

const buttonTexts = [
    "Next surprise! 😌",
    "Okay, one more...",
    "You are not ready for this 👀",
    "Tap gently 💌",
    "Okay... last one 💗"
];

refreshButton.textContent = buttonTexts[0];

refreshButton.onclick = function() {
    currentIndex++;
    if (currentIndex < images.length) {
        showImage(currentIndex);
        if (currentIndex < buttonTexts.length) {
            refreshButton.textContent = buttonTexts[currentIndex];
        }
    } else {
        refreshButton.style.display = 'none';
        showValentineQuestion();
    }
};

function showValentineQuestion() {
        valentinesContainer.innerHTML = '';
        const questionDiv = document.createElement('div');
        questionDiv.id = 'valentineQuestion';
        questionDiv.innerHTML = `<p>So.. will you be my Valentine.. today, tomorrow, and forever?</p>`;
        const yesBtn = document.createElement('button');
            yesBtn.textContent = 'I thought you\'d never ask 💕';
            yesBtn.className = 'btn yes-btn';
        const noBtn = document.createElement('button');
        noBtn.textContent = 'No';
        noBtn.className = 'btn';
        questionDiv.appendChild(yesBtn);
        questionDiv.appendChild(noBtn);
        valentinesContainer.appendChild(questionDiv);

        yesBtn.onclick = function() {
            questionDiv.innerHTML = '<h2>I knew it 😌 <br>You just made me very very happy! ❤️</h2>';
            showFlowers();
        };
        noBtn.onclick = function() {
            noBtn.disabled = true;
            noBtn.textContent = 'Error 404! <br>Page not found. <br>Please try again.';
            questionDiv.innerHTML += '<h2>...</h2>';
        };
}

// Add flower animation
function showFlowers() {
    const flowerContainer = document.createElement('div');
    flowerContainer.id = 'flowerContainer';
    document.body.appendChild(flowerContainer);
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = (Math.random() * 2) + 's';
        // Alternate yellow and pink
        const color = i % 2 === 0 ? 'yellow' : 'pink';
        flower.classList.add(color === 'yellow' ? 'flower-yellow' : 'flower-pink');
        // Add petals
        for (let p = 0; p < 6; p++) {
            const petal = document.createElement('div');
            petal.className = 'petal ' + (color === 'yellow' ? 'petal-yellow' : 'petal-pink');
            petal.style.transform = `rotate(${p * 60}deg) translate(0, -18px)`;
            flower.appendChild(petal);
        }
        // Add center
        const center = document.createElement('div');
        center.className = 'center ' + (color === 'yellow' ? 'center-yellow' : 'center-pink');
        flower.appendChild(center);
        flowerContainer.appendChild(flower);
    }
}

// Style for valentine question and buttons
const style = document.createElement('style');
style.innerHTML = `
    #valentineQuestion {
        text-align: center;
        font-family: 'Arial', sans-serif;
        margin-top: 40px;
    }
    #valentineQuestion .btn {
        margin: 10px;
        padding: 10px 20px;
        font-size: 20px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }
    #valentineQuestion .btn {
        background-color: #f44336; /* Red */
        color: white;
    }
    #valentineQuestion .btn.yes-btn {
        background-color: #4CAF50 !important; /* Green */
        color: white;
    }
    #flowerContainer {
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
    }
    .flower {
        position: absolute;
        top: -60px;
        width: 40px;
        height: 40px;
        animation: flower-fall 4s linear forwards;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .petal {
        position: absolute;
        width: 18px;
        height: 24px;
        border-radius: 50% 50% 50% 50%;
        opacity: 0.95;
        left: 11px;
        top: 3px;
    }
    .petal-yellow {
        background: linear-gradient(135deg, #fffde4 40%, #ffe066 100%);
        box-shadow: 0 0 6px #ffe066;
    }
    .petal-pink {
        background: linear-gradient(135deg, #ffe0f0 40%, #ff69b4 100%);
        box-shadow: 0 0 6px #ff69b4;
    }
    .center {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 0 8px #fff0f5;
    }
    .center-yellow {
        background: radial-gradient(circle at 50% 50%, #ffe066 70%, #ffd700 100%);
        border: 2px solid #fffde4;
    }
    .center-pink {
        background: radial-gradient(circle at 50% 50%, #ffb6c1 70%, #ff69b4 100%);
        border: 2px solid #ffe0f0;
    }
    @keyframes flower-fall {
        0% { top: -60px; opacity: 1; transform: scale(0.7) rotate(0deg); }
        80% { opacity: 1; }
        100% { top: 100vh; opacity: 0.7; transform: scale(1.1) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// End of code