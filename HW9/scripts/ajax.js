$(document).ready(function () {
           $("button").click(function () {
               $("#carInformation").load("data/carinfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#carInformation").fadeOut("slow").fadeIn("slow");
       }
