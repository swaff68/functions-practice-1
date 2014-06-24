// 1. Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
var tripleFive = function() {

	for ( var i=0; i<3; i++) {
		console.log("Five !")
	}
};

// this calls the function i.e makes it run!
console.log(tripleFive())


////////////////////////////////////
// 2. Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.


var lastLetter = function(word){
	return word[word.length-1];

}
console.log(lastLetter('hello'))
console.log(lastLetter('island'))


///////////////////////////////////
// 3. Write a function called 'square' which takes a single argument which is a number, and returns number * number.
var square = function(number){
	return number * number;
}

console.log(square(3))
console.log(square(5))

//////////////////////////////////
// 4. Write a function called 'negate' which takes a single number argument and returns the negative of that number.

var negative = function(x){
	return -x;

}

console.log(negative(5))
console.log(negative(-8))

/////////////////////////////////
// 5. Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.

var toArray = function(x,y,z){
	return [x,y,z];
}

console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10))

////////////////////////////////
// 6. Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.

var startsWithA = function(word){
	if(word[0].toLowerCase() === "a"){
		return true;	
	}
	
		return false;

}

console.log(startsWithA('aardvark'))
console.log(startsWithA('bear'))

////////////////////////////////
// 7. Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.

var excite = function(word){
	return word + "!!!"
}


console.log(excite('yes'))
console.log(excite('go'))

////////////////////////////
// 8. Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.

var sun = function(word){
	if(word.indexOf("sun") === -1){
		return false	
	}
	
		return true;

}
console.log(sun('sundries'))
console.log(sun('asunder'))
console.log(sun('catapult'))

////////////////////////////
// 9. Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.

var tiny = function(i){
	if(i >= 0 && i<=1){
		return true;
	}
		return false;
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

////////////////////////////
// 10. Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.

var getSeconds = function(time){
	
	var pieces = time.split(":");

	return pieces[0] * 60 + (+pieces[1])
}

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));

