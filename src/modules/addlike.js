const addlike = (Obj) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/likes', 
{
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(Obj),
}).then((res) => res);

export default addlike;