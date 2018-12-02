export default function API(path) {
  console.log(path);
  function getRandomIntInclusive(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0 + 1)) + 0; //The maximum is inclusive and the minimum is inclusive
  }
  return fetch(path)
    .then(resp => console.log(resp.text()))
    .then(data => {
      const lenLessOne = data.length - 1;
      return data[getRandomIntInclusive(lenLessOne)];
    });
  // .catch(err => {
  //   console.warn(err);
  //   return null;
  // });
}
