export default function API(path) {
  function getRandomIntInclusive(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0 + 1)) + 0; //The maximum is inclusive and the minimum is inclusive
  }
  return fetch(path)
    .then(resp => resp.json())
    .then(data => {
      const lenLessOne = data.length - 1;
      return data[getRandomIntInclusive(lenLessOne)];
    });
}
