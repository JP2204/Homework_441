// Declare the image class
var imageArray = new Array();

class Images {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theImageSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }
}

function initializeArray()
{
    var image1 = new Images("#image-Id", 'img/Naruto_sasuke.jpg');
    var image2 = new Images("#image-Id", 'img/Itachi.jpg');
    var image3 = new Images("#image-Id", 'img/Kakashi.jpg');
    var image4 = new Images("#image-Id", 'img/Boruto.jpg');

    imageArray.push(image1);
    imageArray.push(image2);
    imageArray.push(image3);
    imageArray.push(image4);
}

function getRandomIndex(){
    return Math.floor(Math.random() * 4);
}

class Squares {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

// begin Jquery
$(document).ready(function() {

    $("button").click(function(){
        $(imageArray[getRandomIndex()].theImageSelector).attr("src", imageArray[getRandomIndex()].theImagePath).fadeIn("slow").fadeOut("slow");
        $("#p1").fadeOut();}) })

function moveSquare()
{
    for (var i = 0; i < 50; i ++) {
        $("#square1").animate({left:700}).animate({top:350}).animate({left:400}).animate({top:100});
    }

    for (var j = 0; j < 60; j ++) {
        $("#square2").animate({left:500}).animate({top:550}).animate({left:600}).animate({top:355});
    }

    for (var k = 0; k < 30; k ++) {
    $("#square3").animate({left:300}).animate({top:600}).animate({left:100}).animate({top:150});
    }
}
