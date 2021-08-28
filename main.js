var speechRecog = window.webkitSpeechRecognition;
var recog = new speechRecog();

function selfiee() {
  document.getElementById("textbox").innerHTML = "";
  recog.start();
}

recog.onresult = function (event) {
  var Stop = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = Stop;
   if(Stop == "take my selfie"){
     speak();
   }
}

function speak(){
  var synth = window.speechSynthesis;

  data_storage = "Blast off";

  var moooo = new SpeechSynthesisUtterance(data_storage);
  console.log(data_storage);

  synth.speak(moooo);

  Webcam.attach(camera1);

  setTimeout(function(){
     takipic();
     save();
  }, 5000
   
  );

}

camera1 = document.getElementById("camera");
Webcam.set({
  width: 360,
  height: 200,
  image_format:'png',
  png_quality: 90
});

function takipic(){
  Webcam.snap (function(data_uri){
    document.getElementById("result").innerHTML = '<img id ="clicked_img" src = "'+data_uri+'">';
  });
}

function save(){
  var link = document.getElementById("link");
  var image = document.getElementById("clicked_img").src ;
  link.href = image;
  link.click();
}