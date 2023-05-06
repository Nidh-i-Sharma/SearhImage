// Define variables
const apiUrl = 'http://localhost:4200/api/images/search/:query'; // change this to the URL of your backend API
const $imageContainer = $('#image-container');
const $searchInput = $('#search');

// Define event listener for search input
$searchInput.on('input', () => {
  // Fetch images
  const query = $searchInput.val();
  const url = `${apiUrl}?q=${query}`;
  fetchImages(url);
});

// Define function to fetch images and append them to the container
function fetchImages(url) {
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: (data) => {
      const images = data.hits;
      $imageContainer.empty();
      images.forEach((image) => {
        const $img = $('<img>').attr('src', image.webformatURL);
        $imageContainer.append($img);
      });
    },
    error: (err) => {
      console.error(err);
    }
  });
}
