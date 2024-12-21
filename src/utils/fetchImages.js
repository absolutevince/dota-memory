export default async function fetchImages(fn) {
  const url = "https://api.opendota.com/api/heroStats";
  const imgUrl = "https://cdn.cloudflare.steamstatic.com/";
  const res = await fetch(url);
  const data = await res.json();

  const images = data.map((hero) => {
    return imgUrl + hero.img;
  });

  fn(images);
}
