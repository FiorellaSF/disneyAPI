const urlParams = new URLSearchParams(window.location.search);
const personajeId = urlParams.get('_id');
const personajeContainer = document.getElementById('personajeContainer');

const apiUrl = `https://api.disneyapi.dev/character/${personajeId}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(personajeData => {
    const personajeDetails = document.createElement('div');
    personajeDetails.innerHTML = `
      <h2>${personajeData.data.name}</h2>
      <p>${personajeData.data.films.join(', ')}</p>
      <p> ${personajeData.data.tvShows.join(', ')}</p>
      <img src="${personajeData.data.imageUrl}" alt="${personajeData.data.name}">
    `;
    personajeContainer.appendChild(personajeDetails);
  })
  .catch(error => console.log(error));


  
  
