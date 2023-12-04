const disneyContainer = document.querySelector('.container');
const url = 'https://api.disneyapi.dev/character';

fetch(url)
  .then(response => response.json())
  .then(data => { 
    const arrayDePersonajes = data.data;

    arrayDePersonajes.forEach(personaje => {
      const personajeP = document.createElement('p');
      personajeP.innerHTML = `<h2>${personaje.name}</h2>`;
      personajeP.setAttribute('data-id', personaje._id);

      personajeP.addEventListener('click', function() {
        // Redirige a la página de detalles del personaje al hacer clic
        window.location.href =  `./personaje.html?_id=${personaje._id}`;
      });

      disneyContainer.appendChild(personajeP);
    });
  })
  .catch(error => console.log(error));

