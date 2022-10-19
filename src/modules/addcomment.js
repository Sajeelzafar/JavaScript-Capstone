const addcomment = (id, username, comment) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/50Q8zpEq0BsnRqW3OEhQlm/comments', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    'item_id': id,
    'username': username,
    'comment': comment
  }),
}).then((res) => res.json())
  .then((output) => console.log(id, username, comment, output));
//   console.log(id, username, comment)

export default addcomment;