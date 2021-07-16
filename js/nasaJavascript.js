// JAVASCRIPT REQUIREMENTS (PICK 4)
// ●	Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
// ●	Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
// ●	Post to an external API and show that it has saved/persisted
    // ○	Example: Use Amazon S3’s API to upload a file to an AWS S3 bucket
// ●	Create a form and save the values (on click of Submit button) to an external file 
    // ○	You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted
// ●	Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
// ●	Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
// ●	Implement a log that records errors, invalid inputs, or other important events and writes them to a text file
// ●	Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
// ●	Create 3 or more unit tests for your application (and document how to run them)
// ●	Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)
// ●	Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)
// ●	Analyze text and display information about it (ex: how many words in a paragraph)
// ●	Visualize data in a graph, chart, or other visual representation of data
// ●	Other features can be added to this list with mentor or staff permission, 
//      but we want to see you stretch your skills, so you’ll want to pick something challenging.

const marsRoverUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DetiR4nF8TdmeOzvFdjiWDWpkxbv59HfpTG1XfLa}`;
const select = document.getElementById('id');
const card = document.querySelector('.marsRoverPic')
const form = document.querySelector('form')

// --------------------------------------------
// FETCH FUNCTIONS
// --------------------------------------------

function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Sorry, there was an error in processing your request.', error))
}

fetchData(marsRoverUrl)
    .then(data => {
        const idNumber = data.photos.id;
        const roverImage = data.photos.img_src;
        const cameraName = data.photos.camera.name;
        console.log(idNumber);
    })

require("node-fetch");

// --------------------------------------------
// HELPER FUNCTIONS
// --------------------------------------------

fetch(marsRoverUrl)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => {
        createList(data.photos);
    })
    .catch(error => console.error('Sorry, there was an error in processing your request.', error))

function createList(photos) {
    const select = document.getElementById('id');
    const options = photos.map(photo => `
        <option value='${photo.camera.id}'>
            ${photo.camera.full_name}
        </option>
        `).join();
    select.innerHTML = options;
}

fetch(url).then((data) => createList(data))

function createPictures(data) {
    const html = `
        <img src='${data}' alt>
        <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

function fetchMarsRoverImage() {}

// --------------------------------------------
// EVENT LISTENERS
// --------------------------------------------

// --------------------------------------------
// POST DATA
// --------------------------------------------
