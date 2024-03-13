// Function to handle image rollover
function setImageRollover(imageElement, originalSrc, rolloverSrc) {
    imageElement.onmouseover = () => {
        imageElement.src = rolloverSrc;
    };
    imageElement.onmouseout = () => {
        imageElement.src = originalSrc;
    };
}

// Function to fetch data from an API and update the webpage
async function fetchDataFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Assuming we want to display this data inside a div with id 'api-data'
        const dataContainer = document.getElementById('api-data');
        dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

// Assuming the image paths are as follows:
const originalImageSrc = 'images/suitcase.jpg';
const rolloverImageSrc = 'images/suitcase_rollover.jpg';

// When the DOM is fully loaded, set up the rollover effect for the image
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('suitcase');
    setImageRollover(mainImage, originalImageSrc, rolloverImageSrc);
});

