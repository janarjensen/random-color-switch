var colorButton = document.querySelector("button");
var h1 = document.querySelector("#idH1");
var color1 = randomColor();
var color2 = randomColor();
var color = false;
var trademark = document.querySelector(".trademark");

colorButton.addEventListener("click", function(){
    idH1.classList.toggle("whiteText");
    idButton.classList.toggle("whiteButton");
    // document.body.classList.toggle("orangeBackground");
  if (color){
    setTimeout(function(){idH1.textContent = "switch color"}, 560);
    setTimeout(function(){idButton.textContent = "color switch"}, 560);
    idTitle.textContent = "switch color";
    // colors
    document.body.style.backgroundColor = color2;
    colorButton.style.color = color2;
    colorButton.style.backgroundColor = color1;
    h1.style.color = color1;

    color1 = randomColor();
    color = false;
  }
  else{
    setTimeout(function(){idH1.textContent = "color switch"}, 560);
    setTimeout(function(){idButton.textContent = "switch color"}, 560);
    idTitle.textContent = "color switch";
    //  colors
    document.body.style.backgroundColor = color1;
    colorButton.style.color = color1;
    colorButton.style.backgroundColor = color2;
    h1.style.color = color2;

    color2 = randomColor();
    color = true;
  }
});

trademark.addEventListener("click", function(){
  alert("made by DE JANSSEN");
});

// *** functions
// generate random color 1
function randomColor(){
  // red 0 <> 255
  var r = Math.floor(Math.random() * 256);
  // green 0 <> 255
  var g = Math.floor(Math.random() * 256);
  // blue 0 <> 255
  var b = Math.floor(Math.random() * 256);
  //create string "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
