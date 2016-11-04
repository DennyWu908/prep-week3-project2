/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(num1, num2) {
	if (num1 > num2) {
		document.getElementById("q1").innerHTML = num2;
	} else if (num2 > num1) {
		document.getElementById("q1").innerHTML = num1;
	} else {
		document.getElementById("q1").innerHTML = "Invalid input. Please enter two different numbers.";
	}
}

document.getElementById("pickInt").addEventListener("click", function() {
	var oneInt = Number(document.getElementById("firstInt").value);
	var twoInt = Number(document.getElementById("secondInt").value);
	minimum(oneInt, twoInt);
});

// 2. Create a new function called minimum3(), 
//    to find the smallest of three numbers,
//    input by a user, 
//    and the smallest displayed within the HTML page.

function minimum3(num1, num2, num3) {
	if ((num1 < num2) && (num1 < num3)) {
		document.getElementById("q2").innerHTML = num1;
	} else if ((num2 < num1) && (num2 < num3)) {
		document.getElementById("q2").innerHTML = num2;
	} else if ((num3 < num1) && (num3 < num2)) {
		document.getElementById("q2").innerHTML = num3;
	} else {
		document.getElementById("q2").innerHTML = "Invalid input. Please enter three different numbers.";
	}
}

document.getElementById("pickAnInt").addEventListener("click", function() {
	var yiInt = Number(document.getElementById("fInt").value);
	var erInt = Number(document.getElementById("sInt").value);
	var sanInt = Number(document.getElementById("tInt").value);
	minimum3(yiInt, erInt, sanInt);
});

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(array) {
	var result = 0;
	for (i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

var numList = [1, 2, 3, 4];

document.getElementById("q3").innerHTML = sum(numList);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(array) {
	var result = 1;
	for (i = 0; i < array.length; i++) {
		result *= array[i];
	}
	return result;
}

var numList = [1, 2, 3, 4];

document.getElementById("q4").innerHTML = multiply(numList);


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(array) {
	var result = [];
	for (i = 0; i < array.length; i++) {
		if (array[i].length >= 6) {
			result.push(array[i]);
		}
	}
	return result
}

document.getElementById("q5").innerHTML = filterSixPlus(words);


// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function convert(tempValue) {
	var farValue = tempValue * (9/5) + 32
	document.getElementById("q6").innerHTML = farValue;
}

document.getElementById("giveCel").addEventListener("click", function() {
	var initCel = parseFloat(document.getElementById("temp").value);
	convert(initCel);
});


// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

function convert1(tempValue) {
	var farValue = tempValue * (9/5) + 32
	document.getElementById("q7").innerHTML = farValue;
}

function convert2(tempValue) {
	var celValue = (tempValue - 32) * (5/9)
	document.getElementById("q7").innerHTML = celValue;
}

document.getElementById("addTemp").addEventListener("click", function() {
	var initValue = parseFloat(document.getElementById("tempVal").value);
	var conversion = document.getElementById("conType").value;
	if (conversion == "F to C") {
		convert2(initValue);
	} else if (conversion == "C to F") {
		convert1(initValue);
	} else {
		document.getElementById("q7a").innerHTML = "Incorrect input. Please refresh the page and try again."
	}
});

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
	var result = 0
	for (i = 0; i < string.length; i++) {
		if (string.charAt(i) == "B") {
			result += 1
		}
	}
	return result
}

document.getElementById("q8").innerHTML = countBs("aaaaBBBaaaBBBBB");

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these! 
//    Get as far as you can and record your progress and time. 
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.







