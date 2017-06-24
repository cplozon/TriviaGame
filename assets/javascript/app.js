

$(document).ready(function() {
  console.log()

var sTime = new Date().getTime();             // declaring variables for the clock
var countDown = 40;  

$("#quiz").hide();                            // Jquery to hide the form until button is clicked to get started

$("#validateform").click(validateform);       

document.getElementById("startButton").onclick = function() {myFunction()};

  function myFunction() {
    document.getElementById("startButton").innerHTML = "Good Luck!"
      $("#bodytext").empty();   // clear body text
      $("#headline").empty();   // clear headline
      $("#quiz").show();
    
//declares a function that says when the start button is clicked - display form, empty body text and headline

UpdateTime();
var counter = setInterval(UpdateTime, 500);

// timer above works, countdown from 90 while user is taking quiz when the button is clicked
  }  // ends myFunction

  function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    var seconds = countDown - Math.floor(diff / 1000);
    document.getElementById("headline").innerHTML = "You have " + seconds + " seconds left!";  //show seconds
    if (seconds === 0 || seconds <0) {                            
                document.getElementById("headline").innerHTML = "Your Time Is Up!!";  // writes to html that time is up
                $("#quiz").hide();
                 document.getElementById("startButton").innerHTML = "Sorry!"

                // !! need to now empty quiz again, show new innerHTML for calculation box, clear button
              }  // close if statement
            }       // close function updatetime for countdown

  function getRBtnName(GrpName) {
    var sel = document.getElementsByName(GrpName);
    var fnd = -1;
    var str = '';
      for (var i=0; i<sel.length; i++) {
        if (sel[i].checked == true) { str = sel[i].value;  fnd = i; }
          } // for loop
    return str; alert(str);
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
  if (qans.length < 8) { alert('Missing selection');}

  else { 
    var amountCorrect = 0;
    for(var i =0; i <=8; i++) {
      var radios = document.getElementsByName("q" + i);
      for (var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        if (radio.value === "correct" && radio.checked){
          amountCorrect++;
         
        }  // closes for final if amountcorrect
      } // closes for j statement 

    } // closes for i statement
    $("#headline").hide();
    $("#quiz").hide();
    $("#formToFillTwo").html("You have " + amountCorrect + " correct!");
  } // closes validate form statement


}

});





  


  