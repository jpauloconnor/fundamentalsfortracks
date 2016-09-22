//--------------------------------------------------------
//--------------------------------------------------------
// -------------- Challenge: Functions  ------------------
//--------------------------------------------------------
//--------------------------------------------------------

/*-----------------------------------------------------------
BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/

function combineWords(wordOne, wordTwo){
	return wordOne + wordTwo;
};
console.log(combineWords("Diet ", "Coke"));

/*-----------------------------------------------------------
SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/

function bills(rent, water, electric, trash, wireless) {
	var totalBills = rent + water + electric + trash + wireless; 
	return totalBills;
}
var paulBills = bills(400, 30, 30, 10, 30);
var jamesBills = bills(600, 30, 30, 10, 30);
console.log("James Bills: " + jamesBills);
console.log("Paul Bills: " + paulBills);
console.log("Bills:", bills(600, 30, 30, 10, 30));

/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/
function calculatePrice(quantity, price, item, tax) {
	
	var totalTax = (quantity * price * tax);
	var totalPrice = quantity * price + totalTax;                                 
	return quantity + " " + item + " will cost you $" + totalPrice.toFixed(2);
}
console.log(calculatePrice(132, .88, "Cups of Coffee", 1.07));