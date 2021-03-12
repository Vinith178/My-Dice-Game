var rand1=Math.floor((Math.random()*6))+1;

var dice_image1="dice"+ rand1 + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",dice_image1);


var rand2=Math.floor(Math.random()*6)+1;

var dice_image2="dice"+rand2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",dice_image2);

if(rand1>rand2){
  document.querySelector("h1").innerHTML="🏆 Player 1 wins";
}
else if (rand2>rand1) {
  document.querySelector("h1").innerHTML="Player 2 wins 🏆";
}
else{
  document.querySelector("h1").innerHTML="🏆 Its a draw 🏆";
}
