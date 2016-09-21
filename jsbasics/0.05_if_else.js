var elevatorUp = true;
var elevatorBroken = false;
var elevatorDown = false;
var elevatorStop = true;

if (elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("The elevator is either broken or going down");
}

//Write one for elevator broken
if (elevatorBroken === true) {
	console.log("Ahhh.....I'm not working");
} else {
	console.log("I'm doing my best to get down to you!");
}

//Write one for elevator stopped
if (elevatorStop){
	console.log("I'm stopped quit pouding that button!!!")
} else {
	console.log("I'm moving as quickly as I can!!!")
}

//elevator going down


//Develop cases where you could use && or ||
if (elevatorUp === true && elevatorBroken === false) {
	console.log("Elevator is in moving state, please wait -- and yes I can rhyme");
} else {
	console.log("Elevator is on its way");
}

if (elevatorDown || elevatorUp) {
	console.log("Please keep your legs and arms inside the elevator");
} else {
	console.log("You've reached your destination");
}