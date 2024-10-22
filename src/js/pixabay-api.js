const API_KEY = '46482476-c2280bd48c83d7184446264f8';
const BASE_URL = 'https://pixabay.com/api';

function searchImages(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    //console.log(res.json);
    return res.json();
  });
}

export { searchImages };
