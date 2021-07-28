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

// --------------------------------------------
// CHECK API
// --------------------------------------------

let url;

function checkApiKey(event) {
    event.preventDefault();
    const apiForUrl = document.getElementById('api').value;
    console.log(apiForUrl);
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiForUrl}`;
    console.log(url);
    getMarsRoverData(url);
    fetchMarsRoverImage(url);
    console.log(url);
    return url;
}

// --------------------------------------------
// GLOBAL CONSTANTS
// --------------------------------------------

const select = document.getElementById('camera');
const marsRoverPic = document.querySelector('.marsRoverPic');
const apiSubmit = document.getElementById('apiForm');

// --------------------------------------------
// FETCH FUNCTIONS
// --------------------------------------------

async function getMarsRoverData(url) {
    console.log(url);
    document.querySelector('.marsRoverContainer').style.display = 'flex';
    document.querySelector('.apiCheck').style.display = 'none';
    const response = await fetch(url);
    const data = await response.json();
    const cameraNames = getCameraNames(data.photos);
    createCameraDropdownList(cameraNames);
    return data;
}


async function fetchMarsRoverImage() {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    const roverUrl = getRoverUrl(data.photos);
    const roverPic = createRoverPic(roverUrl);
    return roverPic;
}

// --------------------------------------------
// CAMERA DROPDOWN LIST
// --------------------------------------------

function getCameraNames(photos) {
    const cameraNames = photos.map(photo => photo.camera.full_name);
    let uniqueCameraNames = [...new Set(cameraNames)];
    return uniqueCameraNames;
}

function createCameraDropdownList(cameraNames) {
    const select = document.getElementById('camera');
    const options = cameraNames.map(cameraName => `
        <option value='${cameraName}'>${cameraName}
            </option>
    `).join();
    select.innerHTML = options;
}

// --------------------------------------------
// CREATE AND RANDOMIZE ROVER PICTURE
// --------------------------------------------

function getRoverUrl(uniqueCams) {
    const picsArray = uniqueCams.filter(uniqueCam => uniqueCam.camera.full_name === select.value)
        .map(uniqueCam => uniqueCam.img_src);
    const randomDigit = Math.floor(Math.random()*picsArray.length);
    const randomPic = picsArray[randomDigit];
    return randomPic;
}

function createRoverPic(roverPic) {
    const rover = document.querySelector('.marsRoverPic')
    const html = `
        <p>Click to view images from the ${select.value}
        <img src='${roverPic}' alt>
        `;
        rover.innerHTML = html;
}

// --------------------------------------------
// EVENT LISTENERS
// --------------------------------------------

select.addEventListener('change', fetchMarsRoverImage);
marsRoverPic.addEventListener('click', fetchMarsRoverImage);
apiSubmit.addEventListener('submit', checkApiKey);

// --------------------------------------------
// POST DATA
// --------------------------------------------
