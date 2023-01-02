console.log("Hello World!");

// Select iFrame
var iframe = document.querySelector("iframe");
// Target iFrame and create a Vimeo Object
var player = new Vimeo.Player(iframe);

//Trigger function if video is playing
player.on("play", function () {
  console.log("VIDEO IS PLAYING");
  //Add class
  iframe.classList.add("is-active");
});

//Trigger function if video is paused
player.on("pause", function () {
  console.log("VIDEO IS PAUSED");
  //Remove class
  iframe.classList.remove("is-active");
});









$(document).ready(function (){
            $(".lower").click(function (){
                $('html, body').animate({
                    scrollTop: $(".background2").offset().top
                }, 2000);
            });
        });


        (function($){

          $(document).ready(function(){

            $('.main-carousel').flickity({
              cellAlign: 'left',
              wrapAround: true

            });

          });


        })(jQuery)
