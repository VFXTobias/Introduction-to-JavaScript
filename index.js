/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 19;

if(votingAge > 18){
    console.log(`Task A: True, Voting age is set to ${votingAge}.`);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let firstName = 'Tobias';
let lastName = 'Smith';

if(lastName != 'Steiner'){
    firstName = 'NotTobias'
}

console.log(`Task B: ${firstName} ${lastName} because Tobias' last name is Steiner not Smith.`);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let myStr = '1999';

console.log (`Task C: ${Number(myStr)}`);



//Task d: Write a function to multiply a*b 

function Multiply(num1, num2){
    let product = num1 * num2;
    console.log (`Task D: ${num1} times ${num2} equals ${product}.`);
}

Multiply(5, 10);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    let dogAge = age * 7;
    console.log(`Task 2: You are ${dogAge} years old in dog years.`);
}

dogYears(prompt('What is your age?'));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

function dogFeed(){
let userDogWeight = prompt(`What is your dog's weight?`);
let dogWeight = Number(userDogWeight);
let userDogAge = prompt(`What is your dog's age?`);
let dogAge = Number(userDogAge);

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

    if(dogAge >= 1 && (dogWeight >= 1 && dogWeight<= 5)){
        console.log(`Your dog is an adult and is  ${dogWeight} pounds so you should feed it ${dogWeight * .05} pounds of food per day.`);
    } else if (dogAge >= 1 && (dogWeight >= 6 && dogWeight <= 10)){
        console.log(`Your dog is an adult and is ${dogWeight} pounds so you should feed it ${dogWeight * .04} pounds of food per day.`);
    } else if (dogAge >= 1 && (dogWeight >=11 && dogWeight <=15)){
        console.log(`Your dog is an adult and is ${dogWeight} pounds so you should feed it ${dogWeight * .03} pounds of food per day.`);
    } else if (dogAge >= 1 && dogWeight > 15){
        console.log(`Your dog is an adult and is ${dogWeight} pounds so you should feed it ${dogWeight * .02} pounds of food per day.`);
    } else if (dogAge < 1 && (dogAge >= .16 && dogAge <=.33)){
        console.log(`Your dog is a puppy and is ${dogWeight} pounds so you should feed it ${dogWeight * .1} pounds of food per day.`);
    }else if(dogAge <1 && (dogAge >= .33 && dogAge <=.58)){
        console.log(`Your dog is a puppy and is ${dogWeight} pounds so you should feed it ${dogWeight * .05} pounds of food per day.`);
    } else if (dogAge < 1 && (dogAge >= .58 && dogAge <= 1)){
        console.log(`Your dog is a puppy and is ${dogWeight} pounds so you should feed it ${dogWeight * .04} pounds of food per day.`);
    }else{
        console.log('Your dog has no weight!');
    }
}

dogFeed();


// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPS(userChoice){
    var userChoice = window.prompt('Do you choose rock, paper or scissors?');
    var computerChoice = Math.random();
    if (computerChoice <= 0.33) {
    computerResult = "rock";
    } else if (computerChoice <= 0.66) {
    computerResult = "paper";
    } else {
    computerResult = "scissors";
    }

    if (userChoice === computerResult){
        console.log(`Task 4: You chose ${userChoice} and the computer chose ${computerResult}. It's a tie!`);
    }else if (userChoice ==="rock" && computerResult === "paper"){
        console.log(`Task 4: You chose ${userChoice} and the computer chose ${computerResult}. You lose!`);
    }else if (userChoice === "rock" && computerResult === "scissors") {
        console.log(`Task 4: You chose ${userChoice} and the computer chose ${computerResult}. You win!`);
    }else if (userChoice ==="paper" && computerResult ==="rock"){
        console.log(`Task4: You chose ${userChoice} and the computer chose ${computerResult}. You win!`);   
    }else if(userChoice ==="paper" && computerResult ==="scissors"){
        console.log(`Task 4: You chose ${userChoice} and the computer chose ${computerResult}. You lose!`);
    }else if (userChoice === "scissors" && computerResult === "rock") {
        console.log(`Task 4: You chose ${userChoice} and the computer chose ${computerResult}. You lose!`); 
    }else if (userChoice === "scissors" && computerResult === "paper") {
        console.log(`Task 4: You chose ${userChoice} and the computer chose ${computerResult}. You win!`);   
    }else{
        console.log(`Please choose a valid option!`);
    }
}

RPS();
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function KMtoMiles(userKM){
    var userKM = prompt(`Please enter the number of kilometers you wish to convert to miles.`);
    var toMiles = userKM * 1.609;
    console.log(`${userKM} kilometers is equal to ${toMiles} miles.`);
}

KMtoMiles();



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCM(userFeet) {
    var userFeet = prompt(`Please enter the number of feet you wish to convert to centimeters.`);
    var toCM = userFeet * 30.48;
    console.log(`${userFeet} feet is equal to ${toCM} centimeters.`);
}

feetToCM();



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong() {
    let i = 99;
    while (i > 1) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, `);
        i--;
        console.log(`take one down pass it around, ${i} bottles of soda on the wall!`);
    }
}

annoyingSong();




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function GradeCalc(grade){
    if (grade >=90){
        console.log(`Your grade of ${grade} is an A. Congrats!`);
    }else if(grade >=80 && grade <90){
        console.log(`Your grade of ${grade} is a B. Try a little bit harder!`);
    }else if (grade >= 70 && grade <80){
        console.log(`Your grade of ${grade} is a C. You should study a little bit more.`);
    }else if (grade >= 60 && grade < 70){
        console.log(`Your grade of ${grade} is a D. Did you read past the title of the assignment?`);
    }else{
        console.log(`Your grade of ${grade} is an F. You ever watch the movie Groundhog Day? You should start over and try again tomorrow.`);
    }
}

GradeCalc(95);

  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

// Considered the .includes() method but it would have resulted in considerably more code to get the proper result.  Discovered .match() as a more suitable option.

function vowelCount(str) {
    return (str = str.match(/[aeiou]/gi)) ? str.length : 0;
}

console.log(vowelCount("tobias"));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// Completed





