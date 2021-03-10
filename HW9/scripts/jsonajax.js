$(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("data/car.json", function(responseText){
                    var car = JSON.parse(responseText);
                    $("#carInformation").html("Manufacturer: " + car.manufacturer
                    + "<br> Model: " + car.model + "<br> Year: " + car.year + "<br> Horsepower: " + car.horsepower + "<br> Available Colors:" + "<br>" + car.colors[0] + "<br>" + car.colors[1] + "<br>" + car.colors[2] + "<br>" + car.colors[3] + "<br>" + car.colors[4] + "<br>" + car.colors[5] );
                });
            });
        });
