// your JS code goes here
// var submitButton = document.getElementById("submitButton");
function checkNumber() {
    var answer = document.getElementById('answer').value;
    var attempt = document.getElementById('attempt').value;
    var userInput=  document.getElementById('userInput').value;
    var errorMsg = document.getElementById('errorMsg');
    var results = document.getElementById('results');
    // console.log(userInput);
    //answer is being fixed untill page refreshed
      if (!answer) {
      answer = generateRandomNumber();
      document.getElementById('answer').value = answer;
      }
       console.log(answer);
      //
      if (!attempt) {
        attempt=0;
      }
  if (!validateInput(userInput)) {
    // error message
    errorMsg.innerHTML= '<p class="invalid-input-msg">Number should be 4 digit long !! </p>'
    return;
  }
  else{
    errorMsg.innerHTML="";
    attempt++;
    document.getElementById('attempt').value = attempt;
  }

  // answer    =1234
  // userInput =2345
  // MAIN -LOGIC
  var correctDigit=0;
   var html= '<tr><td>' + userInput + '</td><td>'
 for (let i = 0; i < userInput.length; i++) {
      if (userInput[i]==answer[i]) {
        // insert tick
      html = html +  '<i class="fa fa-check text-success" style="padding:3px;"></i>';
       correctDigit++;
      } else if (answer.indexOf(userInput[i]) > -1) {
        // exchange tick
      html = html +  '<i class="fa fa-exchange text-warning" style="padding:3px;"></i>';
      } else {
        // not found
      html = html +  '<i class="fa fa-times text-danger" style="padding:3px;"></i>';
      }
 }
 html = html + '</td></tr>';
 results.innerHTML += html ;
if (correctDigit === userInput.length) {
  errorMsg.innerHTML= '<p class="text-success">YOU ARE A BORN WINNER</p>'
  document.getElementById('buttonGuess').style="display:none;"
  document.getElementById('buttonReplay').style="display:block;"
} else if (attempt >=10) {
    errorMsg.innerHTML= '<p class="text-final-warning">YOUR 10 ATTEMPTS OVER. TRY AGAIN</p>'
    document.getElementById('buttonGuess').style="display:none;"
    document.getElementById('buttonReplay').style="display:block;"
} else {
  errorMsg.innerHTML= '<p class="text-warning">NOT ACCURATE..!</p>'
}

}
function generateRandomNumber() {
var num =  Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
num= num.toString();
  return num;
}
function validateInput(str){
  if (str.length==4)
    return true;
  else
    return false;
}
