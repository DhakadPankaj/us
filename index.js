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

refreshButton.onclick = function() {
    currentIndex++;
    if (currentIndex < images.length) {
        showImage(currentIndex);
    } else {
        refreshButton.style.display = 'none';
        showValentineQuestion();
    }
};

function showValentineQuestion() {
        valentinesContainer.innerHTML = '';
        const questionDiv = document.createElement('div');
        questionDiv.id = 'valentineQuestion';
        questionDiv.innerHTML = `<p>Will you be my valentine for life?</p>`;
        const yesBtn = document.createElement('button');
        yesBtn.textContent = 'Yes';
        yesBtn.className = 'btn';
        const noBtn = document.createElement('button');
        noBtn.textContent = 'No';
        noBtn.className = 'btn';
        questionDiv.appendChild(yesBtn);
        questionDiv.appendChild(noBtn);
        valentinesContainer.appendChild(questionDiv);

        yesBtn.onclick = function() {
                questionDiv.innerHTML = '<h2>I knew it! ❤️</h2>';
        };
        noBtn.onclick = function() {
                noBtn.disabled = true;
                noBtn.textContent = 'Think again!';
                questionDiv.innerHTML += '<h2>.....</h2>';
        };
}


// Style for valentine question and buttons
const style = document.createElement('style');
style.innerHTML = `
    #valentineQuestion {
        text-align: center;
        font-family: 'Arial', sans-serif;
        margin-top: 20px;
    }
    #valentineQuestion .btn {
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }
    #valentineQuestion .btn:first-child {
        background-color: #4CAF50; /* Green */
        color: white;
    }
    #valentineQuestion .btn:last-child {
        background-color: #f44336; /* Red */
        color: white;
    }
`;
document.head.appendChild(style);

// End of code