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

function print(){
	brendan = 'only okay';
	console.log(brendan);
}
