// 1. 
var tripleFive = function() {

	for ( var i=0; i<3; i++) {
		console.log("Five !")
	}
};

// this calls the function i.e makes it run!
console.log(tripleFive())


////////////////////////////////////
// 2.


var lastLetter = function(word){
	return word[word.length-1];

}
console.log(lastLetter('hello'))
console.log(lastLetter('island'))


///////////////////////////////////
// 3.
var square = function(number){
	return number * number;
}

console.log(square(3))
console.log(square(5))

//////////////////////////////////
// 4.

var negative = function(x){
	return -x;

}

console.log(negative(5))
console.log(negative(-8))

/////////////////////////////////
// 5.

var toArray = function(x,y,z){
	return [x,y,z];
}

console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10))

////////////////////////////////
// 6.

var startsWithA = function(word){
	if(word[0].toLowerCase() === "a"){
		return true;	
	}
	
		return false;

}

console.log(startsWithA('aardvark'))
console.log(startsWithA('bear'))

////////////////////////////////
// 7.

var excite = function(word){
	return word + "!!!"
}


console.log(excite('yes'))
console.log(excite('go'))

////////////////////////////
// 8.

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
// 9.

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
// 10.
var getSeconds = function(time){
	
	var pieces = time.split(":");

	return pieces[0] * 60 + (+pieces[1])
}

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));

