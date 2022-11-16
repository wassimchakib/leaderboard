import checkInput from './utilities.js';
import API from './api.js';

const submitForm = (e) => {
  const form = document.querySelector('.add-score form');
  const spanSuccess = document.querySelector('.result');
  e.preventDefault();

  const user = e.target.name.value;
  const score = e.target.score.value;

  if (checkInput(user) && checkInput(score)) {
    API.sendGame({ user: user.trim(), score }).then((data) => {
      if (data.result === 'Leaderboard score created correctly.') {
        spanSuccess.textContent = 'Your score was added successfully';
        spanSuccess.classList.add('success');
        // Make text disappear after 3 seconds
        setTimeout(() => {
          spanSuccess.classList.remove('success');
        }, 3000);
      } else {
        spanSuccess.textContent = 'Something wrong happened, Please Try Again';
        spanSuccess.classList.add('error');
        // Make text disappear after 3 seconds
        setTimeout(() => {
          spanSuccess.classList.remove('error');
        }, 3000);
      }
    });
    form.reset();
  } else {
    spanSuccess.textContent = 'Cannot submit an empty text / score, please try again';
    spanSuccess.classList.add('error');
    // Make text disappear after 3 seconds
    setTimeout(() => {
      spanSuccess.classList.remove('error');
    }, 3000);
  }
};

const retrieveAndShowScores = () => {
  const listScore = document.querySelector('.list-score');
  API.retrieveScoreGame().then((result) => {
    const array = result
      .sort((a, b) => b.score - a.score)
      .map((game, index) => `<li><span class="ranking">${index + 1}</span><span class="username">${game.user}</span><span class="score">${game.score}</span></li>`);
    listScore.innerHTML = array.join('');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.add-score form');
  const refreshBtn = document.querySelector('.head-score button');
  form.addEventListener('submit', submitForm);
  refreshBtn.addEventListener('click', retrieveAndShowScores);
});

module.exports = { submitForm };
