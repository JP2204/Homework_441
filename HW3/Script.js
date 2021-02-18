function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Oliver and Suki love to sleep but they also love to cuddle and keep their human parents warm. Do you think that is all they do?";
        document.getElementById("choice1").innerHTML = "Nope Continue";
        document.getElementById("choice2").innerHTML = "No Quit";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Aww are you sure you do not want to hear The Adventures of Oliver and Suki? We can Restart from the beginning if you would like?";
        document.getElementById("choice1").innerHTML = "Okay Maybe Next Time";
        document.getElementById("choice2").innerHTML = "Yes Restart";
    } else if (choice == 1 && answer1 == "Nope Continue") {
        document.getElementById("story").innerHTML = "Oliver and Suki both love to play in paper bags as well as sitting in boxes. But they also love to eat as well and they have the nickname chunky butts because they tend to eat alot.";
        document.getElementById("choice1").innerHTML = "Keep Going";

    } else if (choice == 2 && answer2 == "Yes Restart") {
        document.getElementById("story").innerHTML = "This is a story about the very sleepy siblings Oliver and Suki. Oliver is the orange cat and Suki is the black and white cat and they both love to sleep, but would you like to hear about some other things they like to do?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    }

    else if (choice == 1 && answer1 == "Keep Going") {
        document.getElementById("story").innerHTML = "Oliver and Suki love to eat and sleep the most but they also really love playing with toys as well as play fighitng with eachother. And with that this brings The Adventures of Oliver and Suki to a close." + "<br>would you like to Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";

    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "This is a story about the very sleepy siblings Oliver and Suki. Oliver is the orange cat and Suki is the black and white cat and they both love to sleep, but would you like to hear about some other things they like to do?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No Quit") {
        document.getElementById("story").innerHTML = "Thank You For Reading This Far!";

    }


}
