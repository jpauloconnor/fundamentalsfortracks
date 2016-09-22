
//Declaration
function helloWorld(){
	console.log("Hello World");
}

//Call
helloWorld();

//Declaration
function printMyName(){
	console.log("Paul");
}

//Call
printMyName();

//Declaration #2
var name = function(){
	console.log("Paul");
}
//Call
name();


//Scope
function addNumbers(){
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();

function multiplyNumbers(){
	var x = 10;
	var y = 10;
	console.log(x * y);
}
multiplyNumbers();


///Parameters & Arguments
function printNumber(x){
	console.log("The number you entered was: " + x);
}
//Argument
printNumber(6);

//function
function bankPin(x){
	var cardPin = 45678;
	//CHALLENGE - use conditional statements to 
	//check whether the pin # is correct or not.
	console.log(x + " is the correct number.");
}

//Argument
bankPin(1234);

function numAdd(a, b){
	return a + b;
}

var z = numAdd(5, 7);
console.log("z:", z);


console.log(numAdd("James", "Paul"));
console.log(numAdd(1,2));

/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/
/*-----------------------------------------------------------
SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/


/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/

