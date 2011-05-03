var blink_closure = (function () {
  var state = "on";
  return function() {
    if(state == "on"){
      document.getElementById("cursor").style.visibility="hidden";
      state = "off";
    } else {
      document.getElementById("cursor").style.visibility="visible";
      state = "on";
    }
    return true;
  };
})();

function nine(){
  $("#9").show().jTypeWriter({duration:0.6});;
  setInterval(blink_closure, 1000);
}

function eight(){
  $("#8").show();
	setTimeout(nine, 1000)
}

function seven(){
  $("#7").show().jTypeWriter({duration:0.6});;
	setTimeout(eight, 1000);
}

function six(){
  $("#6").show();
  setTimeout(seven, 1000);
}

function five(){
  $("#5").show().jTypeWriter({duration:0.5});;
  setTimeout(six, 1000);
}

function four(){
  $("#4").show();
  setTimeout(five, 1000);
}

function three(){
  $("#3").show();
  setTimeout(four, 1500);
}

function two(){
  $("#2").show().jTypeWriter({duration:0.7});
  setTimeout(three, 1000);
}

function one(){
  $("#1").show();
  setTimeout(two, 1000);
}

$(document).ready(one);
