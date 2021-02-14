
alert('Welcome to my page, I hope you like what you see!')

var test ='Thank you for visting my page!';
console.log(test);

function bubblesBlown (a, b){
var differenceInBubbles = a - b;
return differenceInBubbles;

}

var differenceInBubbles =  bubblesBlown (12, 5);
console.log(differenceInBubbles);


function myfunction() {

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