$(document).ready(function() {
  console.log()

var sTime = new Date().getTime();
var countDown = 30;  

console.log("Test One");
$("#quiz").hide();

$("#validateform").click(validateform);

document.getElementById("startButton").onclick = function() {myFunction()};

	function myFunction() {
    document.getElementById("startButton").innerHTML = "Good Luck!"

    	//$("#quiz").prepend();
		$("#bodytext").empty();  	// clear body text
		$("#headline").empty(); 	// clear headline
		$("#quiz").show();
		
///// above works  with onclick function it empties some text lines





UpdateTime();
var counter = setInterval(UpdateTime, 500);

//// timer above works, countdown from 90 while user is taking quiz






// var amountChecked = 0;
// 	for (var k = 1; k < 9; k++) {
// 	var radiosCheck = document.getElementsByName('group' + k);
// 		for ( var l = 0; l < radiosCheck.length; l++) {
// 			var radiosCheck = radiosCheck[l];
// 			if(radiosCheck < 8) 	{
// 				alert("You are missing a question, please review");
// 									}  // closes alert statment
// 													}  // closes for var radiosCheck
// 								}  // closes for k loop


	}


  function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    var seconds = countDown - Math.floor(diff / 1000);
    document.getElementById("headline").innerHTML = "You have " + seconds + " seconds left!";  //show seconds
    if (seconds === 0 || seconds <0) {                            
                document.getElementById("headline").innerHTML = "Your Time Is Up!!";
              }  // close if statement
            }       // close function updatetime

function getRBtnName(GrpName) {
  var sel = document.getElementsByName(GrpName);
  var fnd = -1;
  var str = '';
  for (var i=0; i<sel.length; i++) {
    if (sel[i].checked == true) { str = sel[i].value;  fnd = i; }
  }
  return str;
}    // closes function getRBtnName

function validateform() {
  var q1 = getRBtnName('q1');
  var q2 = getRBtnName('q2');
  var q3 = getRBtnName('q3');
  var q4 = getRBtnName('q4');
  var q5 = getRBtnName('q5');
  var q6 = getRBtnName('q6');
  var q7 = getRBtnName('q7');
  var q8 = getRBtnName('q8');

  var qans = q1+q2+q3+q4+q5+q6+q7+q8;
  if (qans.length < 8) { alert('Missing selection'); return; }
  else finalClick();
}  // closes function validate form


function finalClick() {   
    alert("Hi!");    
    var amountCorrect = 0;          
    for(var i = 0; i <= 8; i++) {
            if(radio.value == "correct" && radio.checked) {
                amountCorrect++;
                
              }
        }
        alert("Correct Responses: " + amountCorrect);  
    }// closes for i loop            
 // closes fu
    }
);