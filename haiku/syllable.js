var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var syllableMap= {};
var syllableArr= []; 

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function createSyllableObj(data){    
   var lines = data.split("\n");
   lines.forEach(function(line){   
   var word=  /\w+(\(\d\))?/.exec(line)[0];
      if(line.match(/\d/g)){
      	var syllables= line.match(/\d(?!\))/g).length;
      	if(syllableMap.hasOwnProperty(syllables)){
      		syllableMap[syllables].push(word);
      	}
      	else
      		syllableMap[syllables]= [word]; 
      }
   	  else
   	  	if(syllableMap.hasOwnProperty("0")){
      		syllableMap["0"]= word;
      	}
      	else
      	syllableMap["0"]= [word];
  });   

}


function createSyllableArr(){
	for(prop in syllableMap){
		syllableArr.push(syllableMap[prop]);
	}

}

createSyllableObj(cmudictFile);
createSyllableArr();

module.exports= syllableArr; 


