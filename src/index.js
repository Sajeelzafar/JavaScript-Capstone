// import _ from 'lodash';
import './style.css';
import fetchData from './modules/displayMovies.js';
import addcomment from './modules/addcomment.js';
import fetchcomment from './modules/fetchcomment.js';
import commentCounterFunction from './modules/commentCounter.js';
import addlike from './modules/addlike.js';
import fetchlike from './modules/fetchlike.js';

const movies = document.querySelector('.movie-info');
const id = [1, 2, 3, 4, 5, 6];
const popup = document.querySelector('.pop-up');
const closebutton = document.querySelector('.closebutton');
const popupContentLoad = document.querySelector('.popupContentLoad');
const popupCommentButton = document.querySelector('.popupCommentButton');
const inputname = document.querySelector('.inputname');
const textarea = document.querySelector('.textarea');
const commentsload = document.querySelector('.commentsload');
const countercomment = document.querySelector('.countercomment');
const like = document.querySelector('.like');

id.forEach((movie) => {
  fetchData(movie).then((res) => {
    movies.innerHTML += `<div id="${movie}" class="movie-img">
    <img src="${res.image.medium}">
    <section class='movie-desk'>
      <p class="movie-title">${res.name}</p>
      <div class="like-button">
      <button class="like-button"><i class="fa-regular fa-heart like"></i></button>
        <p></p>
      </div>
    </section>
    <button class="comment-button">Comment</button></div>`;
  });
});

let ID = '';
let commentCounter = 0;
function openPopUp() {
  popup.classList.add('open');
}
function closePopUp() {
  popup.classList.remove('open');
}

movies.addEventListener('click', (e) => {
  if (e.target.classList.contains('comment-button')) {
    fetchData(e.target.parentElement.id).then(async (res) => {
      openPopUp();
      ID = e.target.parentElement.id;
      popupContentLoad.innerHTML = `<div>
      <img id="${e.target.parentElement.id}" src="${res.image.medium}"></div>
      <div class="firstline">
      <span class="firstlineItemone">Categories: ${res.genres.join(', ')}</span>
      <span class="firstlineItemtwo">Rating: ${res.rating.average}</span>
      </div>
      <div class="secondline">${res.summary}
      </div>`;
      await fetchcomment(ID);
      commentCounter = commentCounterFunction();
      countercomment.innerHTML = `( ${commentCounter} )`;
    });
  }

  if (e.target.classList.contains('like')) {
    addlike({
      item_id: ID,
    });
  }
});

closebutton.addEventListener('click', () => {
  commentsload.innerHTML = '';
  commentCounter = 0;
  closePopUp();
});

popupCommentButton.addEventListener('click', () => {
  addcomment({
    item_id: ID,
    username: inputname.value,
    comment: textarea.value,
  });
  commentsload.innerHTML += `<p><span>Just now ${inputname.value}: ${textarea.value}</p>`;
  commentCounter = commentCounterFunction();
  countercomment.innerHTML = `( ${commentCounter} )`;
  inputname.value = '';
  textarea.value = '';
});

like.addEventListener('click', (e) => {
  if (e.target.classList.contains('like')) {
    fetchlike({
      likes: 1,
      item_id: ID,
    });

  }
});

