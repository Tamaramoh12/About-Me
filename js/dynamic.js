'use strict';
// // variable to store the user result
var sum = 0;

// //the welcoming msg
alert('Welcome to my personal web page, I am going now to ask you some questions in order to  find the common things ' +
'between me and you, so please answer using YES/NO or Y/N.');

function q1(){
 var age = prompt('Is your age between 18 - 28 ?');
if (age.toUpperCase() == 'YES' || age.toUpperCase() == 'Y'){
    console.log('Yeah, We are almost the same gneration.');
    alert ('Yeah, We are almost the same generation.');
    sum +=1;
} else if (age.toUpperCase() == 'NO' || age.toUpperCase() == 'N') {
    console.log('Oh no, I wish we were the same age.');
    alert ('Oh no, I wish we were the same age.');
} else {
    console.log('Put your answer please.');
    alert ('Put your answer please.');
} console.log('The 1st question was \'Is your age between 18 - 28 ? and you answered\' ' + age);

}
q1();


function q2(){
    var volunteer = prompt('Do you like volunteering ?');
if (volunteer.toUpperCase() == 'YES' || volunteer.toUpperCase() == 'Y'){
    //console.log('Great, We both have a volunteer hobby.');
    alert ('Great, We both have a volunteer hobby.');
    sum +=1;
} else if (volunteer.toUpperCase() == 'NO' || volunteer.toUpperCase() == 'N') {
    //console.log('Oh no, I wish you like it.');
    alert ('Oh no, I wish you like it.')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}
console.log('The 2nd question was \'Do you like volunteering ?\' and you answered '+ volunteer);}
q2();


function q3(){
    var major = prompt('Did you study something related to Information Technology ?');
    if (major.toUpperCase() == 'YES' || major.toUpperCase() == 'Y'){
        //console.log('Wow! So we have the same majors.');
    alert ('Wow! So we have the same majors.')
        sum +=1;
    } else if (major.toUpperCase() == 'NO' || major.toUpperCase() == 'N') {
        //console.log('Oh no, I wish that you are IT student or IT Hobbyist.');
        alert ('Oh no, I wish that you are an IT student or IT Hobbyist.')
    } else {
        //console.log('Put your answer please.');
        alert ('Put your answer please.');
    }
    console.log('The 3rd question was\'Did you study something related to Information Technology ?\' and you answered '+ major);
}
q3();


function Q4(){
    var drink = prompt('Do you love Nescafe ?');
if (drink.toUpperCase() == 'YES' || drink.toUpperCase() == 'Y'){
    //console.log('actually this make me happy, because I am Nescafe addicted.');
    alert ('actually this make me happy, because I am Nescafe addicted.')
    sum +=1;
} else if (drink.toUpperCase() == 'NO' || drink.toUpperCase() == 'N') {
    //console.log('Oh no, I wish that you love it.');
    alert ('Oh no, I wish that you love it.')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}
console.log('The 4th question was\'Do you love Nescafe ?\' and you answered '+ drink);
}
Q4();


function q5(){
    var time = prompt('Are you a morning person ?');
if (time.toUpperCase() == 'YES' || time.toUpperCase() == 'Y'){
    //console.log('Wow, I really love early mornings\'.');
    alert ('Wow, I really love early mornings\'.')
    sum +=1;
} else if (time.toUpperCase() == 'NO' || time.toUpperCase() == 'N') {
    //console.log('Trust me, early mornings\' is better');
    alert ('Trust me, early mornings\' is better')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}
console.log('The 5th question was\'Are you a morning person ?\' and you answered '+ time);
}
q5();


function q6(){

alert('lets play somthing.');
for (var counter = 1; counter <= 4; counter++){
    // var userNum(Number) = userNum;
    var userNum = prompt('Guess a number'); 
    if(userNum == 97){
        sum +=1;
        alert ('WOW, Perfect, You guess the right number.');
        break;
    } else if (userNum <= 90) {
        alert ('too low!!, try another number.');
    } else if (userNum >= 100) {
        alert ('too high!!, try another number.');
    } else if (userNum >= 95 && userNum <=99){
        alert ('Game over, the correct number was 97.');
    }   
}
console.log('The 6th question was about gussing number, and the correct answer is 97.');
}
q6();


function q7(){
    var color = ['black','white','pink','blue','gray','green','yellow','purple']; 
var userColor = prompt('Ummm, can you guess my favorite color ?')
var counter =  1;
while( counter < 6 ){
    if (userColor == color[0] || userColor == color[2] || userColor == color[3] || userColor == color[5]) {
        alert ('your\'re brilliant, you got it, black and the light colors are the favorite colors to me');
        sum +=1;
        break;
    }
    else{
        alert('try another color.')
        prompt('Ummm, can you guess another color ?')
    }
    counter++;
} 
alert('The correct answer was: Black or pink or blue or gray');
console.log('The 7th question was about my favorite color, and the correct answer is black, pink, blue, and gray.');
}
q7();

// //the result
console.log('You got '+ sum + ' out of 7. ' + 'Thank you for your time.');

