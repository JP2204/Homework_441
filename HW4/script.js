function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "yes")
            {
               document.getElementById("choice").style.display="none";
               document.getElementById("btnSubmit").style.display="none";

               document.getElementById("choice2").style.display="block";
               document.getElementById("btnSubmit2").style.display="block";

                myQuestion.innerHTML = "Oh great I am so happy you chose to continue, now <br> Oliver and Suki may love to sleep but they also love to cuddle and keep their human parents warm especially during the very cold winter months, making the use of a blanket obsolete. which would you prefer to keep warm, cats or a blanket? ";

            }
            else if(myChoice === "no")
            {
                myQuestion.innerHTML = "aww ok maybe next time";


            }
        }

function getChoice2()
        {
            var choice = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(choice === "cats")
            {

              document.getElementById("choice2").style.display="none";
              document.getElementById("btnSubmit2").style.display="none";

              document.getElementById("choice3").style.display="block";
              document.getElementById("btnSubmit3").style.display="block";



              document.getElementById("mainImage").src = "./img/oliver and suki.jpg"
              myQuestion.innerHTML = "I prefer cats as well! <br> Now let us continue with our story. <br> Oliver and Suki both love to play in paper bags as well as sitting in boxes. But they also love to eat as well and they have the nickname chunky butts because they tend to eat alot. <br> There favorite food to eat is tuna and chicken. <br> What would you choose if you were a cat?";

            }

            else if(choice === "blanket")
            {
              document.getElementById("choice2").style.display="none";
              document.getElementById("btnSubmit2").style.display="none";

              document.getElementById("choice3").style.display="block";
              document.getElementById("btnSubmit3").style.display="block";
              myQuestion.innerHTML = "you can never go wrong with using a blanket, but I highly recommend giving cats a go. <br> Now let us continue with our story. <br> Oliver and Suki both love to play in paper bags as well as sitting in boxes. But they also love to eat as well and they have the nickname chunky butts because they tend to eat alot. <br> There favorite food to eat is tuna and chicken. <br> What would you choose if you were a cat?";

            }
        }

function getChoice3()
        {
          var choice = document.getElementById("choice3").value;
          var myQuestion = document.getElementById("question");
          if(choice === "tuna")
          {

            document.getElementById("choice3").style.display="none";
            document.getElementById("btnSubmit3").style.display="none";

            document.getElementById("choice4").style.display="block";
            document.getElementById("btnSubmit4").style.display="block";

            document.getElementById("mainImage").src = "./img/suki in box.jpg"

            myQuestion.innerHTML = "tuna would definitley be my choice as well, I am just more of a fish person, think thats why I like cats, they like the same food I do haha <br> Now to wrap things up, Oliver and Suki really love to eat and sleep the most but they also really love playing with toys as well as play fighitng with eachother. they are both very lovely kitties that love each other very much. And with that this brings The Adventures of Oliver and Suki to a close. What are your thoughts on The Adventures of Suki and Oliver? Did you like the story?"

          }
          else if(choice === "chicken")
          {
            document.getElementById("choice3").style.display="none";
            document.getElementById("btnSubmit3").style.display="none";

            document.getElementById("choice4").style.display="block";
            document.getElementById("btnSubmit4").style.display="block";

            document.getElementById("mainImage").src = "./img/oliver bag.jpg"

            myQuestion.innerHTML = "you cannot go wrong with chicken, this would for sure be my second choice as well, chicken is just a simple meal. <br> Now to wrap things up, Oliver and Suki really love to eat and sleep the most but they also really love playing with toys as well as play fighitng with eachother. they are both very lovely kitties that love each other very much. And with that this brings The Adventures of Oliver and Suki to a close. What are your thoughts on The Adventures of Suki and Oliver? Did you like the story?"
          }

        }

function getChoice4()
        {
          var choice = document.getElementById("choice4").value;
          var myQuestion = document.getElementById("question");
          if(choice === "yes")
          {

            document.getElementById("choice4").style.display="none";
            document.getElementById("btnSubmit4").style.display="none";

            document.getElementById("choice5").style.display="block";
            document.getElementById("btnSubmit5").style.display="block";

            document.getElementById("mainImage").src = "./img/suki bed.jpg"

            myQuestion.innerHTML = "I am so glad to hear, Suki and Oliver just so happen to be my cats and I love them dearly, and I was happy to share them with you!!"

          }
          else if(choice === "no")
          {
            document.getElementById("choice4").style.display="none";
            document.getElementById("btnSubmit4").style.display="none";

            document.getElementById("choice5").style.display="block";
            document.getElementById("btnSubmit5").style.display="block";

            document.getElementById("mainImage").src = "./img/tree.jpg"

            myQuestion.innerHTML = "as much as that hurts to hear I respect your opinion and I hope you liked the adorable pictures of Suki and Oliver!"
          }


        }

function reloadThePage()
        {
          window.location.reload();
        }
