const like = document.querySelector('.like');

export default async function fetchlike() {
  like.innerHTML = '';
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/likes`)
    .then((res) => res.json())
    .then((output) => {
      output.forEach((like) => {
        like.innerHTML += `<p><span>${like.likes} ${like.item_id}</span></p>`;
      });
    });
}