///################Series///#####################

async function getTopAnimes(season, year, perPage = 23) {
  const query = `
    query ($season: MediaSeason, $seasonYear: Int, $perPage: Int) {
      Page(perPage: $perPage) {
        media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC) {
          title {
            romaji
          }
        }
      }
    }
  `;
  
  const variables = {
    season: season.toUpperCase(),
    seasonYear: year,
    perPage: perPage
  };
  
  const response = await fetch('https://graphql.anilist.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });
  
  const data = await response.json();
  const animeTitles = data.data.Page.media.map(media => media.title.romaji);
  
  return animeTitles;
}

async function getAnimeCoverImages(animeTitles) {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME) {
        coverImage {
          large
        }
      }
    }
  `;

  const coverImageUrls = [];

  for (let i = 0; i < animeTitles.length; i++) {
    const variables = {
      search: animeTitles[i]
    };

    const response = await fetch('https://graphql.anilist.co/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    });

    const data = await response.json();
    const coverImageUrl = data.data.Media.coverImage.large;
    coverImageUrls.push(coverImageUrl);
  }

  return coverImageUrls;
}

async function getAnimePage(animeTitle) {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME) {
        siteUrl
      }
    }
  `;

  const variables = {
    search: animeTitle
  };

  const response = await fetch('https://graphql.anilist.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });

  const data = await response.json();
  const animePageUrl = data.data.Media.siteUrl;

  return animePageUrl;
}


///################Películas///#####################
async function getTopMovies(perPage = 10) {
  const query = `
    query ($perPage: Int) {
      Page(perPage: $perPage) {
        media(type: ANIME, format: MOVIE sort: POPULARITY_DESC) {
          title {
            romaji
          }
        }
      }
    }
  `;

  const variables = {
    perPage: perPage
  };

  const response = await fetch('https://graphql.anilist.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });

  const data = await response.json();
  const seriesTitles = data.data.Page.media.map(media => media.title.romaji);

  return seriesTitles;
}

async function getMoviePage(animeTitle) {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME, format: MOVIE) {
        siteUrl
      }
    }
  `;

  const variables = {
    search: animeTitle
  };

  const response = await fetch('https://graphql.anilist.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });

  const data = await response.json();
  const animePageUrl = data.data.Media.siteUrl;

  return animePageUrl;
}

async function getMovieCoverImages(movieTitles) {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME, format: MOVIE) {
        coverImage {
          large
        }
      }
    }
  `;

  const coverImageUrls = [];

  for (let i = 0; i < movieTitles.length; i++) {
    const variables = {
      search: movieTitles[i]
    };

    const response = await fetch('https://graphql.anilist.co/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    });

    const data = await response.json();
    const coverImageUrl = data.data.Media.coverImage.large;
    coverImageUrls.push(coverImageUrl);
  }

  return coverImageUrls;
}

// async function displayMovieList(year) {
//   const movieTitles = await getTopMovies(year);
//   console.log(movieTitles);

//   const ul = document.getElementById('movie-table');

//   for (let i = 0; i < movieTitles.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = movieTitles[i];
//     ul.appendChild(li);
//   }
// }
