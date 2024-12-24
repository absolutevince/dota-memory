export default function getRandomItems(src, length) {
  const arr = [];
  const availableIndeces = [];
  for (let i = 0; i < src.length; i++) {
    availableIndeces.push(i);
  }
  for (let i = 0; i < length; i++) {
    const rnd = Math.floor(Math.random() * availableIndeces.length);
    arr.push(src[availableIndeces[rnd]]);
    availableIndeces.splice(rnd, 1);
  }
  return arr;
}
