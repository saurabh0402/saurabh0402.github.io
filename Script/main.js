window.addEventListener("load", animateLoad, false);
var count  = 1, count2 = 0;

function animateLoad(){
  document.getElementById("divLoad"+count).style.height = "100px";
  document.getElementById("divLoad"+count).style.marginTop = "100px";

  x = count + 1;
  if(x == 9) x = 1;
  document.getElementById("divLoad"+x).style.height = "80px";
  document.getElementById("divLoad"+x).style.marginTop = "120px";

  y = count + 2;
  if(y == 9) y = 1;
  if(y == 10) y = 2;
  document.getElementById("divLoad"+y).style.height = "60px";
  document.getElementById("divLoad"+y).style.marginTop = "140px";

  z = count + 3;
  if(z == 9) z = 1;
  if(z == 10) z = 2;
  if(z == 11) z = 3;
  document.getElementById("divLoad"+z).style.height = "40px";
  document.getElementById("divLoad"+z).style.marginTop = "160px";

  z = count + 4;
  if(z == 9) z = 1;
  if(z == 10) z = 2;
  if(z == 11) z = 3;
  if(z == 12) z = 4;

  document.getElementById("divLoad"+z).style.height = "30px";
  document.getElementById("divLoad"+z).style.marginTop = "170px";

  z = count + 5;
  if(z == 9) z = 1;
  if(z == 10) z = 2;
  if(z == 11) z = 3;
  if(z == 12) z = 4;
  if(z == 13) z = 5;

  document.getElementById("divLoad"+z).style.height = "20px";
  document.getElementById("divLoad"+z).style.marginTop = "180px";

  z = count + 6;
  if(z == 9) z = 1;
  if(z == 10) z = 2;
  if(z == 11) z = 3;
  if(z == 12) z = 4;
  if(z == 13) z = 5;
  if(z == 14) z = 6;

  document.getElementById("divLoad"+z).style.height = "10px";
  document.getElementById("divLoad"+z).style.marginTop = "190px";

  z = count + 7;
  if(z == 9) z = 1;
  if(z == 10) z = 2;
  if(z == 11) z = 3;
  if(z == 12) z = 4;
  if(z == 13) z = 5;
  if(z == 14) z = 6;
  if(z == 15) z = 7;

  document.getElementById("divLoad"+z).style.height = "0px";
  document.getElementById("divLoad"+z).style.marginTop = "200px";

  count++;
  if(count == 9) count = 1;
  setTimeout(animateLoad, 500);
}
