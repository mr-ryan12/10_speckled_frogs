const numToWords = require('number-to-words');
const prompt = require('prompt-sync')();

var numOfFrogs = prompt('How many frogs would you like to sing about? 🐸 ');
while (isNaN(numOfFrogs)) {
  numOfFrogs = prompt('Please enter a number. How many frogs would you like to sing about? 🐸 ');
};

var areYouSure = prompt('Are you sure? ');
if (areYouSure === 'Yes' || areYouSure === 'yes' || areYouSure === 'y') {
  console.log('\nHere ya go!');
} else if (areYouSure === 'No' || areYouSure === 'no' || areYouSure === 'n') {
  console.log('\nYa blew it, but here ya go anyway.');
} else {
  console.log('\nIt was more of a \'Yes\' or \'No\' question, but here ya go anyway!')
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

while (numOfFrogs > 1) {
  console.log(`\n${capitalizeFirstLetter(numToWords.toWords(numOfFrogs))} speckled frogs sat on a log
eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there were ${numToWords.toWords(numOfFrogs - 1)} speckled frogs.`);
  numOfFrogs--;

  if(numOfFrogs === 1) {
    console.log(`\nOne speckled frog sat on a log 
eating some most delicious bugs.  
One jumped in the pool where its nice and cool,  
then there were no more speckled frogs!`)
  }
};

