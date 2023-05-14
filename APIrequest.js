async function getTopAnimes(season, year, perPage = 10) {
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
