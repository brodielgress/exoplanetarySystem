# THE VIEW FROM MARS

Hello! Welcome to The View from Mars, a website designed to show random photos taken by the Mars Rover Curiosity. The website allows users to choose which Mars Rover camera from which they'd like to view photos. My website uses three clear JavaScript functions and redesigns its layout according to different media queries.

In order to use my website, first you need to attain an API key. Instructions for how to do so are below:

1. First, head to NASA's API page, and fill out the information below.

2. Copy the API key that results from it.

3. After you download my code and start the code on a server, insert the API Key into the Input form. This saves the API key as a const, which creates access to the NASA Mars Rover API.

A demo of the API is available on the same website, or you can check out the API by inserting your API Key directly into this URL, where it states "${APIForUrl}: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiForUrl}. 

## JAVASCRIPT FUNCTIONS

# 1. API KEY - 
    - (Create a form and save the values (on click of Submit button) to an external file)

The first JavaScript function is the NASA API key. The CheckForApiKey function in my code saves the API key to a constant, which it then inserts into the URL to access the Mars Rover database. The API input form then hides itself and shows the rest of the website: the camera selection menu, the photo, and a date selection form (the date selection form is currently inoperable).

If the user inputs an incorrect API key, the page will simply show as blank. With more time, I would code in an if/then statement, where if a photograph from the API doesn't show the user is told they put in an incorrect API key. A try/catch that measures for 400 or 500 issues would also be ideal.

###### 2. FETCH NASA API 
    - (Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX))

Once the API can successfully be pulled, the JavaScript fetches the data from the Mars Rover API and uses that data to create the camera dropdown menu and displays a photograph from the object of the selected camera, which, as of now, is always the Front Hazard Avoidance Camera. 

###### 3. CAMERA DROPDOWN MENU
    - (Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application)

After the API is fetched, the camera dropdown menu uses three filters (.map and ...new Set) to create a new array to fill out the camera menu. If you check the API JSON objects, you'll see the camera options repeat themselves for every photograph. The .map narrows down the object to just the camera's name, while the ...new Set method (I think that's a method, right?) takes out all repetitions of the same name, leaving only the five unique options.

###### 4. OTHER JAVASCRIPT FUNCTIONS

The "CREATE AND RANDOMIZE ROVER PICTURE" functions randomize which URL is selected and creates the photo from the URL. In the first function, the .filter and .map functions are used to filter out the API's JSON object based on which camera option is selected and saved as "Select.value", creating a new array. The function then uses the Math.Floor(Math.Random) function to randomize which item of the array is selected along the length of the array.

Every time the user clicks the image, these functions activate, so technically the entire API is loaded every time the photo clicks, which is why some photos take longer to load than others. Ideally, I would save the new array created from selecting different camera options, which might save some time, although you'll notice the Mast Camera easily has the most options of them all.

###### 5. INCOMPLETE CODE

I have a menu for the date, which doesn't do anything right now, though I left it on the website so that the desktop layout didn't seem so imbalanced. I would code the date option so that the user could also pick which earth date they want to view photos from; their selection would be translated into a "sol" (a Mars day), which would be used to filter a unique Mars Rover array from the API, like the camera options. Users could get Rover photos taken on their birthdays or other special days. I would also like to make it so users could choose which Rover they wanted to use, such as Opportunity or Spirit, rather than just Curiosity. But alas.


## MEDIA QUERIES

###### 1. TABLET

My tablet media query aligns the photo on the side and the dropdown menus on the side. The buttons also get a little larger, allowing users to more easily read and tap them.

###### 2. DESKTOP

The desktop app places the picture in the middle and the different selection options on the side.

## CSS NOTE

Not gonna lie, I love CSS; I've always been visually inclined. I gave the website a sienna background to match that of Mars, with a Roboto font to give it that outer space tinge. I would love to include pictures of Mars or the Curiosity, possibly with an About page and link to NASA's website, to give users more context for the website.

###### Thank You!

That's my JavaScript project. Thank you all; I hope you enjoy it a little! I have some ways to go before I understand JavaScript and other languages, but working on this project and getting help from mentors vastly improved my skills.