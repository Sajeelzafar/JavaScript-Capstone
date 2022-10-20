const commentsload = document.querySelector('.commentsload');
let counter = 0;

const commentCounterFunction = () => {
  counter = commentsload.getElementsByTagName('p').length;
  return counter;
};
export default commentCounterFunction;