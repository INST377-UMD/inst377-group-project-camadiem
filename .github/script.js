const apiKey = 'nPFzxugQHzw2hkfe4yb3oYoSKvCU88Hl3IJtCqJhZ6L61GtDci';

// Function for the search button click
document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('search-bar').value;
    const animalType = document.getElementById('animal-type').value;
    const distance = document.getElementById('distance').value;

    searchPets(location, animalType, distance);
});

// Function to search for pets
    function searchPets(location, animalType, distance) {
    
    const apiUrl = `https://api.petfinder.com/v2/animals?type=${animalType}&location=${location}&distance=${distance}`;

    // Fetch token from Petfinder API
    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=ObGTrVAZLiQv6xu5LfeLjZMazgQNu1JpP4csnweO',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        const token = data.access_token;

       
        return fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    })
    .then(response => response.json())
    .then(data => {
        displayPets(data.animals);
    })
    .catch(error => console.error('Error:', error));
}

// Function to display pets
function displayPets(pets) {
    const bodyElement = document.body;
    const listings = document.getElementById('pet-listings');
    const adoptMeText = document.getElementById('adopt-me-text');
    listings.innerHTML = '';

    if (pets.length > 0) {
        
        bodyElement.classList.add('results-present');
        adoptMeText.style.display = 'none'; 
    } else {
       
        bodyElement.classList.remove('results-present');
        adoptMeText.style.display = 'block'; 
    }

    pets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.className = 'pet-item';
        let petContent = `
            <h3>${pet.name}</h3>
            ${pet.photos && pet.photos.length ? `<img src="${pet.photos[0].medium}" alt="Photo of ${pet.name}">` : ''}
            <p>${pet.description || 'No description available'}</p>
        `;
        petDiv.innerHTML = petContent;
        listings.appendChild(petDiv);
    });

}
    // Function to animate the images in the adoption section
    function animateAdoptionSection() {

        // Animates the cat image
        Velocity(document.getElementById('cat-image'), { 
            left: '10%', 
            opacity: 1 
        }, { 
            duration: 1000,
            loop: true, 
        });
        
        // Animates the dog image
        Velocity(document.getElementById('dog-image'), { 
            right: '10%', 
            opacity: 1 
        }, { 
            duration: 1000,
            loop: true, 
        });
        
        // Animates the adopt us! text
        Velocity(document.getElementById('adopt-me-text'), { 
            opacity: 1, 
            scale: [1, 0.8]
        }, { 
            duration: 1000,
            loop: true,
            easing: "easeInOutSine" 
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        animateAdoptionSection();
    });
