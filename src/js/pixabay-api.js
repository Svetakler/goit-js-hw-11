const API_KEY =
  '46856425-450f7e6938fc07d9efbff3295';
const BASE_URL = 'https://pixabay.com/api/';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: encodeURIComponent(query),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params.toString()}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching images.');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      return data.hits;
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Error fetching images. Try again!',
      });
      console.error('Error fetching images:', error);
    });
}
