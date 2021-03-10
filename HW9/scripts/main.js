let car = {
                "manufacturer" : "NISSAN",
                "model" : "R35 GT-R SpecV",
                "horsepower" : "542 HP",
                "year" : "2013",

                "colors" : [
                  "Deep Blue Pearl",
                  "Gun Metallic",
                  "Jet Black",
                  "Pearl White",
                  "Solid Red",
                  "Super Silver"
                ]
            }



        $(function () {                     //this function declares then when the click function happens the info is shown
            $("button").click(function () {
                showCarInfo();
            });

        });

        function showCarInfo()  //this function holds the info that the user will see
            {
                $("#carInformation").html("Manufacturer: " + car.manufacturer
                + "<br> Model: " + car.model + "<br> Year: " + car.year + "<br> Horsepower: " + car.horsepower + "<br> Available Colors:" + "<br>" + car.colors[0] + "<br>" + car.colors[1] + "<br>" + car.colors[2] + "<br>" + car.colors[3] + "<br>" + car.colors[4] + "<br>" + car.colors[5] );

            }
