console.log("working");
/*
1. number of buttons (1-9)
2. operator keys (+,-,x,/)
3. equals key
4. clear key
5. display screen

action - 
- all buttons have must have 2 events / click + hover event = method used bubbling and capturing - var parent / children to target button and create an event. 

*/

//1st step - create a variable for all the different buttons. 



var displayBtn = document.getElementById('display');
var calcButtons = document.getElementsByClassName('buttonNum');  // = 789 456 123
var btnClear = document.getElementsByClassName('buttonClear');  // AC
var btnEquals = document.getElementsByClassName('equals');  // =
var calcOpsBtn = document.getElementsByClassName('operator');  // = */-+
var displayScreen = document.getElementById('screen');

var displayVal = '0';
var pendingVal;
var evalStringArray = []; // javascript eval function which takes a string whihc will perform the calculation.

// create a function
var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;

  if (displayVal === '0';
  displayVal = '';

  displayVal + - btnText;
  displayValElement.innerText = displayVal;


}

// create a for loop
for (var i = 0; i < calcButtons.length; i++) {
  calcButtons[i].addEventListener('click', updateDisplayVal, false);
}
for (var i = 0; i < calcOperator.length; i++) {
  calcOpsBtn[i].addEventListener('click', performOperation, false);
}

btnClear.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal



}
