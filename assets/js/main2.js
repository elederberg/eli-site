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
