var myPhotoViewArray = new Array();

class PhotoViewer
{

    constructor(title,image,author,date,description)
    {
        this.title = title;
        this.image = image;
        this.author = author;
        this.date = date;
        this.description = description;
    }

    toString()
    {
        return "Title: " + this.title;
        return "Image: " + this.image;
        return "Artist: " + this.author;
        return "Date: " + this.date;
        return "Description: " + this.description;
    }

    get theTitle()
    {
        return "Title: " + this.title;
    }
    get theImage()
    {
        return this.image;

    }
    get theAuthor()
    {
        return "Artist: " + this.author;
    }
    get theDate()
    {
        return "Date: " + this.date;
    }
    get theDescription()
    {
        return "Description: " + this.description;
    }

}

function initializeArray()
{

    var myPhotoViewer = new PhotoViewer("Scooter on The Street",'img/street_bike.jpg',"Tatsuto Shibuta","2016","A person cruising the streets of Japan on their scooter");
    var myPhotoViewer1 = new PhotoViewer("Ramen Shop",'img/Ramen.jpg',"Oskar Krawczyk","2018","View from outside a ramen shop");
    var myPhotoViewer2 = new PhotoViewer("Bridge to the Shrine",'img/shrine.jpg',"Ana Marzo", "n/a","Beautiful shrine tucked away in the forest");
    var myPhotoViewer3 = new PhotoViewer("City Life",'img/city_life.jpg',"Naohiro Yako","2019","The hustle and bustle of city life");
    var myPhotoViewer4 = new PhotoViewer("The Narrow Streets of Japan",'img/streets_of_japan.jpg',"Vnus Nicolee","2018","The narrow streets of Japan");
  myPhotoViewArray.push(myPhotoViewer);
  myPhotoViewArray.push(myPhotoViewer1);
  myPhotoViewArray.push(myPhotoViewer2);
  myPhotoViewArray.push(myPhotoViewer3);
  myPhotoViewArray.push(myPhotoViewer4);

}


function accessInformation()
{




  var randomViewArray = myPhotoViewArray[Math.floor(Math.random()*myPhotoViewArray.length)];

  document.getElementById("title").innerHTML = randomViewArray.theTitle;
  document.getElementById("image").src = randomViewArray.theImage;
  document.getElementById("author").innerHTML = randomViewArray.theAuthor;
  document.getElementById("date").innerHTML = randomViewArray.theDate;
  document.getElementById("description").innerHTML = randomViewArray.theDescription;

   console.log(randomViewArray);

}
