javascript
window.addEventListener('DOMContentLoaded', (event) => {
  fetch('/api/destinations')
    .then(response => response.json())
    .then(data => {
      const destinationsContainer = document.getElementById('destinations');
      data.forEach(destination => {
        const destinationDiv = document.createElement('div');
        const image = document.createElement('img');
        image.src = destination.image;
        image.alt = destination.name;
        destinationDiv.appendChild(image);
        destinationsContainer.appendChild(destinationDiv);
      });
    })
    .catch(error => console.error(error));
});