// const counter = (moviesSection) => {
//     let counter = 0;
//     const movies = moviesSection.querySelector('.movie-img');
//     movies.forEach(() => {
//       counter += 1;
//     });
//     return counter;
//   };

//   export default counter;
const itemCounterFunction = () => {
  const shows = document.querySelector(".shows");
  let counter = 0;
  counter = shows.getElementsByTagName("img").length;
  return counter;
};
export default itemCounterFunction;
