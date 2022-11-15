import checkInput from './utilities.js';

const listScore = document.querySelector('.list-score');
const form = document.querySelector('.add-score form');

const submitForm = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const score = e.target.score.value;

  if (checkInput(name) && checkInput(score)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name}: ${score}`;
    listScore.append(listItem);
  }
  form.reset();
};

form.addEventListener('submit', submitForm);