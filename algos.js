// Reverse a string by turning into an array, reversing, and then back to a string

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

//  Are all the characters in a string unique

var isUnique = function(str){
    for(i=0; i<str.length; i++){
        for(j=i+1; j<str.length; j++){
            if(str.charAt(i) === str.charAt(j) && str.charAt(i) != " "){return false}
        }
    }
    return true
}

// Are two strings permutations of eachother

function isPerm(a,b) {
	if (a.length != b.length) {return false}
	if (a.split("").sort().join() != b.split("").sort().join()) {
		return false;
	}
	return true;
}

// URLify

function toURL(str) {
	return str.trim().split(" ").join('%20')
}

console.log(toURL("make this a url    "))













