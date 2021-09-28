


function myFunction1() {
  document.getElementById("demo").style.color = "red";
}

function WhichButton(event) {
  alert("You pressed button: " + event.button)
}

var x = document.getElementById("myDIV");

// Start the animation with JavaScript
function myFunction() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}

function myFunction2() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }

  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
  }

  function myFunction4(x) {
    x.style.background = "yellow";
  }

  function myFunction5() {
    document.getElementById("demo").innerHTML = "You pasted text!";
  }
 
  function myFunction6() {
    var x = document.getElementById("myInput");
    document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
 }

 function myFunction7() {
    alert("The form was submitted");
  }