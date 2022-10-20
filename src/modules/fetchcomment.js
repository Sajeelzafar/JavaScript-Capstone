const commentsload = document.querySelector('.commentsload');

export default async function fetchcomment(id) {
  commentsload.innerHTML = '';
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/comments?item_id=${id}`)
    .then((res) => res.json())
    .then((output) => {
      output.forEach((comment) => {
        commentsload.innerHTML += `<p><span>${comment.creation_date} ${comment.username}: ${comment.comment}</span></p>`;
      });
    });
}