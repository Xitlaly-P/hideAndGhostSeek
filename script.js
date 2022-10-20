var countDownDate = new Date("Oct 31, 2022 00:00:00").getTime();
var myfunc = setInterval(function() {

  var now = new Date().getTime();
  var left = countDownDate - now;

  var days = Math.floor(left / (1000 * 60 * 60 * 24));
  var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((left % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, " + min + " minutes, " + sec + " seconds";

  if (left < 0) {
    clearInterval(myfunc);
    document.getElementById("countdown").innerHTML = "SPOOKY SEASON";
  }
}, 1000)

const maxWidth  = window.innerWidth - 50;
const maxHeight = window.innerHeight - 50;
var count = 0;
var vid = false;

function hide(){
  document.getElementById('ghostt').style.left= Math.floor(Math.random()*maxWidth) +"px";
  document.getElementById('ghostt').style.top= Math.floor(Math.random()*maxHeight) +"px";
}

function found(){
  count++;
  hide();
  document.getElementById('countg').innerHTML = "Ghosts Found: " + count;
  //document.getElementById('out').innerHTML = maxHeight;
}

function ytvid(){
  if(!vid){
    document.getElementById('something').style.display = "block";
    vid = true;
  }
  else{
    document.getElementById('something').style.display = "none";
    vid = false;
  }
}