// List of Git tips
var tipsList = [

  "To view the branches in a Git repository <span class='code'> git branch</span>",

  "To create a new branch, run the command: <span class='code'>git branch NEW-BRANCH-NAME</span>.",

  "To checkout an existing branch, run the command: <span class='code'>git checkout</span>."

];

// Tip Limit counter
var tipLimit = 3;

// Generate a number
function generateNumber() {
  return Math.floor(Math.random() * tipsList.length);
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip() {
  var tip = tipsList[generateNumber()];
  var tipElement = document.querySelector('.git-tip');
  var tipLimitCount = document.querySelector('.tip-limit-count');

  tipElement.innerHTML = tip;
  tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick() {
  var tipButton = document.querySelector('.tip-button');
  tipButton.addEventListener('click', function() {
    tipLimit = tipLimit - 1;
    if (tipLimit >= 0) {
      generateTip();

      if (tipLimit === 0) {
        tipButton.innerHTML = 'For More Tips Open a NEW Tab!';
        tipButton.classList.add('disabled');
      }
    }
  });
}

onTipButtonClick();

// Get the first tip
generateTip();
