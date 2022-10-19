// import _ from 'lodash';
import './style.css';
import fetchData from './modules/displayMovies.js';
import addcomment from './modules/addcomment.js';
import fetchcomment from './modules/fetchcomment.js';

const movies = document.querySelector('.movie-info');
const id = [1, 2, 3, 4, 5, 6];
const popup = document.querySelector('.pop-up');
const closebutton = document.querySelector('.closebutton');
const popupContentLoad = document.querySelector('.popupContentLoad');
const popupCommentButton = document.querySelector('.popupCommentButton');
const inputname = document.querySelector('.inputname');
const textarea = document.querySelector('.textarea');
const commentsload = document.querySelector('.commentsload');

id.forEach((movie) => {
  fetchData(movie).then((res) => {
    movies.innerHTML += `<div id="${movie}" class="movie-img">
    <img src="${res.image.medium}">
    <section class='movie-desk'>
      <p class="movie-title">${res.name}</p>
      <div class="like-button">
        <button class="like-button"><i class="fa-regular fa-heart"></i></button>
        <p>2 likes</p>
      </div>
    </section>
    <button class="comment-button">Comment</button></div>`;
  });
});

let ID = '';

function openPopUp() {
  popup.classList.add('open');
}
function closePopUp() {
  popup.classList.remove('open');
}

movies.addEventListener('click', (e) => {
  if (e.target.classList.contains('comment-button')) {
    commentsload.innerHTML = '';
    fetchData(e.target.parentElement.id).then((res) => {
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
      fetchcomment(ID).then(output => {
          output.forEach(comment => {
            commentsload.innerHTML += `<p><span>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`
          })
      });
    });
  }
});

closebutton.addEventListener('click', () => {
  closePopUp();
});

popupCommentButton.addEventListener('click', () => {
  addcomment({
    item_id: ID,
    username: inputname.value,
    comment: textarea.value,
  });
});