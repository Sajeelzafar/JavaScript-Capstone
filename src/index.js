// import _ from 'lodash';
import './style.css';
import fetchData from './modules/displayMovies.js';

const movies = document.querySelector('.movie-info');
const id = [1, 2, 3, 4, 5, 6];
const popup = document.querySelector('.pop-up');
const closebutton = document.querySelector('.closebutton');
const popupContent = document.querySelector('.popupContent');

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

function openPopUp() {
  popup.classList.add('open');
}
function closePopUp() {
  popup.classList.remove('open');
}

movies.addEventListener('click', (e) => {
  if (e.target.classList.contains("comment-button")){
    fetchData(e.target.parentElement.id).then(res => {
      openPopUp();
      popupContent.innerHTML = `<div>
      <img src="${res.image.medium}"></div>
      <div class="firstline">
      <span class="firstlineItemone">Categories: ${res.genres.join(", ")}</span>
      <span class="firstlineItemtwo">Rating: ${res.rating.average}</span>
      </div>
      <div class="secondline">${res.summary}
      </div>`; 
    });
  }

})

closebutton.addEventListener('click', () => {
  closePopUp();
});