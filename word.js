// const wordText = document.querySelector(".word"),
//   hintText = document.querySelector(".hint span"),
//   timeText = document.querySelector(".time b"),
//   inputField = document.querySelector("input"),
//   refreshBtn = document.querySelector(".refresh-word"),
//   checkBtn = document.querySelector(".check-word"),
//   wordsLeftText = document.querySelector(".words-left b"),
//   scoreText = document.querySelector(".score b"),
//   hintContainer = document.querySelector(".hint");

// let correctWord, timer, score = 0, wordsLeft = 10, timeLeft = 30, hintShown = false;
// let currentLevel = window.location.pathname.includes('easy.html') ? 'easy' : 
//                    window.location.pathname.includes('medium.html') ? 'medium' : 'hard';

// const initTimer = () => {
//   clearInterval(timer);
//   timeLeft = 30;
//   hintShown = false;
//   hintContainer.style.display = 'none';
  
//   timer = setInterval(() => {
//     if (timeLeft > 0) {
//       timeLeft--;
//       timeText.innerText = timeLeft;
      
//       if (timeLeft === 20 && !hintShown) {
//         hintContainer.style.display = 'block';
//         hintShown = true;
//       }
//     } else {
//       clearInterval(timer);
//       alert(`Time's up! The correct word was ${correctWord.toUpperCase()}`);
//       wordsLeft--;
//       if (wordsLeft > 0) {
//         initGame();
//       } else {
//         endLevel();
//       }
//     }
//   }, 1000);
// }

// const initGame = () => {
//   if (wordsLeft === 0) {
//     endLevel();
//     return;
//   }

//   initTimer();
//   let randomObj = words[Math.floor(Math.random() * words.length)];
//   let wordArray = randomObj.word.split("");
//   for (let i = wordArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
//   }
//   wordText.innerText = wordArray.join("");
//   hintText.innerText = randomObj.hint;
//   correctWord = randomObj.word.toLowerCase();
//   inputField.value = "";
//   inputField.setAttribute("maxlength", correctWord.length);
//   wordsLeftText.innerText = wordsLeft;
//   scoreText.innerText = score;
// }

// const checkWord = () => {
//   let userWord = inputField.value.toLowerCase();
//   if (!userWord) return alert("Please enter the word to check!");
  
//   if (userWord === correctWord) {
//     let pointsEarned;
//     if (timeLeft > 20) {
//       pointsEarned = 10;
//     } else if (timeLeft > 15) {
//       pointsEarned = 8;
//     } else if (timeLeft > 5) {
//       pointsEarned = 6;
//     } else {
//       pointsEarned = 4;
//     }
//     score += pointsEarned;
//     alert(`Congrats! ${correctWord.toUpperCase()} is correct. You earned ${pointsEarned} points!`);
//   } else {
//     alert(`Oops! ${userWord} is not the correct word`);
//   }
  
//   wordsLeft--;
//   if (wordsLeft > 0) {
//     initGame();
//   } else {
//     endLevel();
//   }
// }

// const endLevel = () => {
//   if (currentLevel === 'easy') {
//     alert(`You've completed the Easy level. Moving to Medium level. Your current score is ${score}`);
//     window.location.href = 'medium.html';
//   } else if (currentLevel === 'medium') {
//     alert(`You've completed the Medium level. Moving to Hard level. Your current score is ${score}`);
//     window.location.href = 'hard.html';
//   } else {
//     alert(`Congratulations! You've completed all levels. Your final score is ${score}`);
//     window.location.href = 'index.html';
//   }
// }

// refreshBtn.addEventListener("click", initGame);
// checkBtn.addEventListener("click", checkWord);

// // Load the score from localStorage if it exists
// const savedScore = localStorage.getItem('wordScrambleScore');
// if (savedScore) {
//   score = parseInt(savedScore);
//   scoreText.innerText = score;
// }

// initGame();

// // Save the score to localStorage before unloading the page
// window.addEventListener('beforeunload', () => {
//   localStorage.setItem('wordScrambleScore', score);
// });

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  wordsLeftText = document.querySelector(".words-left b"),
  scoreText = document.querySelector(".score b"),
  hintContainer = document.querySelector(".hint");

let correctWord, timer, score = 0, wordsLeft = 10, timeLeft = 30, hintShown = false;
let currentLevel = window.location.pathname.includes('easy.html') ? 'easy' : 
                   window.location.pathname.includes('medium.html') ? 'medium' : 'hard';

const shouldResetScoreOnRefresh = true; // Set to true to reset score on page refresh

const initTimer = () => {
  clearInterval(timer);
  timeLeft = 30;
  hintShown = false;
  hintContainer.style.display = 'none';
  
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timeText.innerText = timeLeft;
      
      if (timeLeft === 20 && !hintShown) {
        hintContainer.style.display = 'block';
        hintShown = true;
      }
    } else {
      clearInterval(timer);
      alert(`Time's up! The correct word was ${correctWord.toUpperCase()}`);
      wordsLeft--;
      if (wordsLeft > 0) {
        initGame();
      } else {
        endLevel();
      }
    }
  }, 1000);
}

const initGame = () => {
  if (wordsLeft === 0) {
    endLevel();
    return;
  }

  initTimer();
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  wordsLeftText.innerText = wordsLeft;
  scoreText.innerText = score;
}

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  
  if (userWord === correctWord) {
    let pointsEarned;
    if (timeLeft > 20) {
      pointsEarned = 10;
    } else if (timeLeft > 15) {
      pointsEarned = 8;
    } else if (timeLeft > 5) {
      pointsEarned = 6;
    } else {
      pointsEarned = 4;
    }
    score += pointsEarned;
    alert(`Congrats! ${correctWord.toUpperCase()} is correct. You earned ${pointsEarned} points!`);
  } else {
    alert(`Oops! ${userWord} is not the correct word`);
  }
  
  wordsLeft--;
  if (wordsLeft > 0) {
    initGame();
  } else {
    endLevel();
  }
}

const endLevel = () => {
  if (currentLevel === 'easy') {
    alert(`You've completed the Easy level. Moving to Medium level. Your current score is ${score}`);
    window.location.href = 'medium.html';
  } else if (currentLevel === 'medium') {
    alert(`You've completed the Medium level. Moving to Hard level. Your current score is ${score}`);
    window.location.href = 'hard.html';
  } else {
    alert(`Congratulations! You've completed all levels. Your final score is ${score}`);
    window.location.href = 'index.html';
  }
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

// Load the score from localStorage if it exists
if (!shouldResetScoreOnRefresh) {
  const savedScore = localStorage.getItem('wordScrambleScore');
  if (savedScore) {
    score = parseInt(savedScore);
    scoreText.innerText = score;
  }
} else {
  localStorage.removeItem('wordScrambleScore');
  scoreText.innerText = score;
}

initGame();

// Save the score to localStorage before unloading the page
window.addEventListener('beforeunload', () => {
  localStorage.setItem('wordScrambleScore', score);
});
