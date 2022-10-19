export default async function fetchcomment(id) {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/comments?item_id=${id}`)
    .then((res) => res.json());

  return result;
}
