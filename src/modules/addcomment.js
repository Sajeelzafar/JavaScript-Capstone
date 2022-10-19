const addcomment = (Obj) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/K2yfbgIQf26WocoYCIC5/comments', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(Obj),
}).then((res) => console.log(Obj, res));
//   console.log(id, username, comment)

export default addcomment;