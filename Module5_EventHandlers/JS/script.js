


var test ='Thank you for visting my page!';
console.log(test);


function changeHeader(){
  document.getElementsByTagName("h1")[0].innerHTML = "Module 5 Event Handlers";
}

function changebackground(){
  document.body.style.backgroundColor = "#9f52ccc7";
}


function candyBar() {

  var text;
  var answer = document.getElementById('myInput').value    
  switch(answer){
      case "2":
      alert('That is the right answer!');
      break;
      
      default:
    alert ('So sorry, try again!');    
  
  }
  document.getElementById('demo').innerHTML = text;
  }



function bubblesBlown (a, b){
var differenceInBubbles = a - b;
return differenceInBubbles;

}

var differenceInBubbles =  bubblesBlown (12, 5);
console.log(differenceInBubbles);






function myfunction() {
  var node = document.createElement("Li");
  var textnode = document.createTextNode("The correct answer is 11!");
  node.appendChild(textnode);
  document.getElementById("answerChoices").appendChild(node);
}

