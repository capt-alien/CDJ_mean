// Assignment from JS fundimentals chapter in at Coding Dojo
// Rewrite the code the way it would be seen by the interpreter and predict
// the output:
// 1)
console.log(hello);
var hello = 'world';
// Should print "world"
// Actual print "undefined"
// changes to:
var hello;
console.log(hello);
hello= 'world'


// 2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// Expected console:
// magnet

// refactored:
var needle;
needle = 'haystack';
function test(){
  needle = 'magnet';
	console.log(needle);
}
test();

// 3)
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// expected: Super Cool

// refactored
var brendan;
brendan = 'super cool';
console.log(brendan);



// 4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// output:
// chicken, half-chicken,


var food;
food = 'chicken';
console.log(food);
function eat(){
	food = 'half-chicken';
	console.log(food);
}
eat();


// 5)
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// output
// error


// 6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// output:
// undefined, rock, r&b, disco

// 7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// ouput:
san jose, seattle, burbank, san jose

var dojo
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);



// 8)
