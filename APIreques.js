function getBestAnime() {
  const url = "https://api.jikan.moe/v3/top/anime/1/";
  const animeNames = [];
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.top.forEach(anime => animeNames.push(anime.title));
    })
    .catch(error => console.log(error));
  console.log (animeNames);
  return animeNames;
}
