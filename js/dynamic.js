'use strict'

alert('Welcome to my personal web page, I am going now to ask you some questions in order to  find the common things between me and you, so please answer using YES/NO or Y/N.')

var age = prompt('Is your age between 18 - 28 ?');
if (age.toUpperCase() == 'YES' || age.toUpperCase() == 'Y'){
    //console.log('Yeah, We are almost the same gneration.');
    alert ('Yeah, We are almost the same gneration.')
} else if (age.toUpperCase() == 'NO' || age.toUpperCase() == 'N') {
    //console.log('Oh no, I wish we were the same age.');
    alert ('Oh no, I wish we were the same age.')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.')
}

var volunteer = prompt('Do you like volunteering ?');
if (volunteer.toUpperCase() == 'YES' || volunteer.toUpperCase() == 'Y'){
    //console.log('Great, We both have a volunteer hobby.');
    alert ('Great, We both have a volunteer hobby.')
} else if (volunteer.toUpperCase() == 'NO' || volunteer.toUpperCase() == 'N') {
    //console.log('Oh no, I wish you like it.');
    alert ('Oh no, I wish you like it.')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}

var major = prompt('Did you study something related to Information Technology ?');
if (major.toUpperCase() == 'YES' || major.toUpperCase() == 'Y'){
    //console.log('Wow! So we have the same majors.');
    alert ('Wow! So we have the same majors.')
} else if (major.toUpperCase() == 'NO' || major.toUpperCase() == 'N') {
    //console.log('Oh no, I wish that you are IT student or IT Hobbyist.');
    alert ('Oh no, I wish that you are an IT student or IT Hobbyist.')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}

var drink = prompt('Do you love Nescafe ?');
if (drink.toUpperCase() == 'YES' || drink.toUpperCase() == 'Y'){
    //console.log('actually this make me happy, because I am Nescafe addicted.');
    alert ('actually this make me happy, because I am Nescafe addicted.')
} else if (drink.toUpperCase() == 'NO' || drink.toUpperCase() == 'N') {
    //console.log('Oh no, I wish that you love it.');
    alert ('Oh no, I wish that you love it.')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}


var time = prompt('Are you a morning person ?');
if (time.toUpperCase() == 'YES' || time.toUpperCase() == 'Y'){
    //console.log('Wow, I really love early mornings\'.');
    alert ('Wow, I really love early mornings\'.')
} else if (time.toUpperCase() == 'NO' || time.toUpperCase() == 'N') {
    //console.log('Trust me, early mornings\' is better');
    alert ('Trust me, early mornings\' is better')
} else {
    //console.log('Put your answer please.');
    alert ('Put your answer please.');
}



var userName = prompt('Even if we have common characteristics or no, for sure you are most welcome. So, What is your name dear? ');
alert('Welcome ' + userName + ' ,wish you enjoy here.')