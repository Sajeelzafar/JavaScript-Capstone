export default async function fetchlike() {
    return await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/likes`
    )
      .then((res) => res.json())
      .then((output) => output);
  }
