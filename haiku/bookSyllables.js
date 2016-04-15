var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var bookFile= fs.readFileSync('./the_magicians.txt').toString();
var bookWords= bookFile.split(/\W+/g);
var syllableMap= {};
var bookMap = {}; 
var syllableArr= [["nada"]]; 

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}


//Makes every word a property in the syllableMap object with a value corresponding to its syllables 
function createSyllableObj(data){    
   var lines = data.split("\n");
   lines.forEach(function(line){   
   var word=  /\w+(-||')?\w+(\(\d\))?/.exec(line)[0];
      if(line.match(/\d(?!\)) ?/g)){
      var syllables= line.match(/\d(?!\)) ?/g).length;
   	 syllableMap[word]= syllables; 
      }
   	 else
      syllableMap[word]= 0;
  });   

}

//Using the syllableMap Object the function below makes a syllableMap for the words in the book
function createBookObj(){
  for (var i = 0; i < bookWords.length; i++) {
    var syllable=syllableMap[bookWords[i].toUpperCase()];
    if(bookMap.hasOwnProperty(syllable)){
      bookMap[syllable].push(bookWords[i].toUpperCase());
    }
    else{
      bookMap[syllable]= [bookWords[i].toUpperCase()]
    }
  };
}

createSyllableObj(cmudictFile);
createBookObj();
delete bookMap['undefined'];

function createSyllableArr(){
  for(prop in bookMap){
    syllableArr.push(bookMap[prop]);
  }

}

createSyllableArr();
//console.log(syllableMap['THE']);


module.exports= syllableArr; 
