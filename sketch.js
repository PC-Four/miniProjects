var letters = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y']
var result;
var topics = [
 'sports teams',
 'airlines',
 'animals',
 'birds',
 'companies',
 'food',
 'fruit / vegetables',
 'countries',
 'capital cities',
 'movie titles',
 'song titles',
 'colors',
 'currencies',
 'clothing brands',
 'celebrities',
 'magazines'
];
var one, two, three, four, five, six, roundOneTotal, roundOneTotalPrimitive;
var one2, two2, three2, four2, five2, six2, roundOneTotal2, roundOneTotalPrimitive2;
var one3, two3, three3, four3, five3, six3, roundOneTotal3, roundOneTotalPrimitive3;
var one4, two4, three4, four4, five4, six4, roundOneTotal4, roundOneTotalPrimitive4;
var one5, two5, three5, four5, five5, six5, roundOneTotal5, roundOneTotalPrimitive5;
var one6, two6, three6, four6, five6, six6, roundOneTotal6, roundOneTotalPrimitive6;
var one7, two7, three7, four7, five7, six7, roundOneTotal7, roundOneTotalPrimitive7;

var grandTotal = 0;

function setup() {
  document.getElementById('btn-letter').addEventListener('click', function(){
    result = random(letters);
    document.getElementById('answers').innerHTML = result;

  })
}

function draw() {
  roundOne();
  roundTwo();
  roundThree();
  roundFour();
  roundFive();
  roundSix();
  roundSeven();
  theGrandTotal();
}

function roundOne(){
  one = document.getElementById('one').value;
  two = document.getElementById('two').value;
  three = document.getElementById('three').value;
  four = document.getElementById('four').value;
  five = document.getElementById('five').value;
  six = document.getElementById('six').value;
  roundOneTotalPrimitive = (one / 1) + (two / 1) + (three / 1) + (four / 1) + (five / 1) + (six / 1);
  roundOneTotal = document.getElementById('roundOneTotal').innerHTML = roundOneTotalPrimitive;
}


function roundTwo(){
  one2 = document.getElementById('one2').value;
  two2 = document.getElementById('two2').value;
  three2 = document.getElementById('three2').value;
  four2 = document.getElementById('four2').value;
  five2 = document.getElementById('five2').value;
  six2 = document.getElementById('six2').value;
  roundOneTotalPrimitive2 = (one2 / 1) + (two2 / 1) + (three2 / 1) + (four2 / 1) + (five2 / 1) + (six2 / 1);
  roundOneTotal2 = document.getElementById('roundOneTotal2').innerHTML = roundOneTotalPrimitive2;
}

function roundThree(){
  one3 = document.getElementById('one3').value;
  two3 = document.getElementById('two3').value;
  three3 = document.getElementById('three3').value;
  four3 = document.getElementById('four3').value;
  five3 = document.getElementById('five3').value;
  six3 = document.getElementById('six3').value;
  roundOneTotalPrimitive3 = (one3 / 1) + (two3 / 1) + (three3 / 1) + (four3 / 1) + (five3 / 1) + (six3 / 1);
  roundOneTotal3 = document.getElementById('roundOneTotal3').innerHTML = roundOneTotalPrimitive3;
}

function roundFour(){
  one4 = document.getElementById('one4').value;
  two4 = document.getElementById('two4').value;
  three4 = document.getElementById('three4').value;
  four4 = document.getElementById('four4').value;
  five4 = document.getElementById('five4').value;
  six4 = document.getElementById('six4').value;
  roundOneTotalPrimitive4 = (one4 / 1) + (two4 / 1) + (three4 / 1) + (four4 / 1) + (five4 / 1) + (six4 / 1);
  roundOneTotal4 = document.getElementById('roundOneTotal4').innerHTML = roundOneTotalPrimitive4;
}
function roundFive(){
  one5 = document.getElementById('one5').value;
  two5 = document.getElementById('two5').value;
  three5 = document.getElementById('three5').value;
  four5 = document.getElementById('four5').value;
  five5 = document.getElementById('five5').value;
  six5 = document.getElementById('six5').value;
  roundOneTotalPrimitive5 = (one5 / 1) + (two5 / 1) + (three5 / 1) + (four5 / 1) + (five5 / 1) + (six5 / 1);
  roundOneTotal5 = document.getElementById('roundOneTotal5').innerHTML = roundOneTotalPrimitive5;
}
function roundSix(){
  one6 = document.getElementById('one6').value;
  two6 = document.getElementById('two6').value;
  three6 = document.getElementById('three6').value;
  four6 = document.getElementById('four6').value;
  five6 = document.getElementById('five6').value;
  six6 = document.getElementById('six6').value;
  roundOneTotalPrimitive6 = (one6 / 1) + (two6 / 1) + (three6 / 1) + (four6 / 1) + (five6 / 1) + (six6 / 1);
  roundOneTotal6 = document.getElementById('roundOneTotal6').innerHTML = roundOneTotalPrimitive6;
}
function roundSeven(){
  one7 = document.getElementById('one7').value;
  two7 = document.getElementById('two7').value;
  three7 = document.getElementById('three7').value;
  four7 = document.getElementById('four7').value;
  five7 = document.getElementById('five7').value;
  six7 = document.getElementById('six7').value;
  roundOneTotalPrimitive7 = (one7 / 1) + (two7 / 1) + (three7 / 1) + (four7 / 1) + (five7 / 1) + (six7 / 1);
  roundOneTotal7 = document.getElementById('roundOneTotal7').innerHTML = roundOneTotalPrimitive7;
}

function theGrandTotal() {
  grandTotal = roundOneTotal + roundOneTotal2 + roundOneTotal3 + roundOneTotal4 + roundOneTotal5 + roundOneTotal6 + roundOneTotal7;
  document.getElementById('totaltotal').innerHTML = grandTotal;

}
