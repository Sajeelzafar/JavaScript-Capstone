// import _ from 'lodash';
import './style.css';
import fetchData from './modules/displayMovies.js'

const movies = document.querySelector('.movie-info');
const id = [1, 2, 3, 4, 5, 6];
id.forEach((movie) => {
    fetchData(movie).then((res) => {
    movies.innerHTML += `<div class="movie-img">
    <img src="${res.image.medium}">
    <section class='movie-desk'>
      <p class="movie-title">${res.name}</p>
      <div class="like-button">
        <button class="like-button"><i class="fa-regular fa-heart"></i></button>
        <p>2 likes</p>
      </div>
    </section>
    <button>Comment</button></div>`;
  });
});