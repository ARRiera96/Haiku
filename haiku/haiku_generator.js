//MAIN/DRIVER MODULE

var haiku = require('./haiku');
var syllableArr= require('./syllable'); 
var bookArr= require('./bookSyllables.js');
var haikuArr; 

if(process.argv[2]==='book'){
	console.log(" Haiku Made of Word In The Magicians: ");
	haikuArr= bookArr; 
}
else {
	haikuArr= syllableArr; 
	console.log("To generate a haiku from The Magicians by Lev Grossman, include the word 'book' after 'haiku_generator' on the command line.");
}
var haikuLine= haiku.createHaiku([[1,1,1,2],[1,1,2,1,1,1],[2,2,1]] ,haikuArr);
console.log(haikuLine);

