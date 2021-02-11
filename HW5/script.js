var cardID = ["card1","card2","card3","card4","card5","card6","card7","card8","card9","card10"];
var backImage = "img/Deco.jpg";
var imgs = new Array();
var flips = 0;
var flipping = [0,0];
var score = 0;

function displayBlanks() {
    createRandomArray();
}

function createRandomArray() {
    var imagePaths = ["img/Huracan.jpg","img/R32.jpg","img/TRX.jpg","img/Type R.jpg","img/R35.jpg"];
    var imageDeckCount = [0,0,0,0,0];

    while (imgs.length < 10) {
        var index  = Math.floor(Math.random() * imagePaths.length)
        if (imageDeckCount[index] < 2) {
            imgs.push(imagePaths[index]);
            imageDeckCount[index] += 1;
        }
    }
}

function flipCard(index) {
    if (flips == 2) { checkForMatch(); }
    else {
        document.getElementById(cardID[index]).src = imgs[index];
        flipping[flips] = index;
        flips++;
    }
}

function resetFlippedCards() {
    document.getElementById(cardID[flipping[0]]).src = backImage;
    document.getElementById(cardID[flipping[1]]).src = backImage;
}

function checkForMatch() {
    if (imgs[flipping[0]] == imgs[flipping[1]]) {
        score += 1;
        document.getElementById('score').innerHTML = "Score: " + score;
        disableOnMatch();
        resetCount();
    }
    else {
        resetFlippedCards();
        resetCount();
    }
}

function disableOnMatch() {
    document.getElementById(cardID[flipping[0]]).onclick = null;
    document.getElementById(cardID[flipping[1]]).onclick = null;
}

function resetCount() {
    flips = 0;
    flipping = [0,0];
}
