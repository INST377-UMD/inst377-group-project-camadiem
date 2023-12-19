Title: Pet Adoption Portal, Sabeel, Chelsea, Shea

Description of your project: We created this Pet Adoption Portal to address the challenge that people face in finding and adopting pets from animal shelters and rescue organizations. Our site provides a user friendly platform where you can search for available pets and connect adopters with shelters.

Description of target browsers: It can work on both IOS and Android. 

Link to User Manual: https://docs.google.com/document/d/1gc6KyK4pEsY5Xyn-F0P7ZFULtO1mfJgfBRn8Hgf7LZA/edit?usp=sharing

Developer Manual:

HTML Structure
    -<header>: Contains the title and navigation links (Home, About, Help).
    -<main>: Hosts the search functionality and pet listings area.
    -<footer>: Provides copyright information.
    -Styles are defined within the <style> tag in the <head>.

JavaScript 
    -script.js is at the end of the <body> in html file
    -Trigger: Activated by the 'Search' button (id="search-button").
    -Inputs: User inputs for location, animal type, and distance.
    -Event Listener: JS listens for click events on the search button
    -searchPets(location, animalType, distance):
        -Constructs the API endpoint URL.
        -Fetches token from Petfinder API.
        -Makes a request to the API with the token.
        -Parses the response and calls displayPets.
    -displayPets(pets):
        -Clears existing content in #pet-listings.
        -Iterates over pets data.
        -Creates and appends div elements for each pet with relevant information.
API Integration
    -Petfinder API: Used to fetch pet data based on search criteria.
    -API Key: A unique key (apiKey) is required for authentication.
    -searchPets: Constructs API URL and fetches pet data.
    -displayPets: Renders pet information dynamically in the #pet-listings section.

-There Comments within the code for clarity.
