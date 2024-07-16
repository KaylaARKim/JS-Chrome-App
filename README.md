# To Do Application Clone

> A project to clone the functionality of the To-Do app.</br> >https://kaylaarkim.github.io/To-Do-Chrome-Application/

## 1. Development Timeline

- HTML & JavaScript:</br>27/5/2024 ~ 30/5/2024

- CSS:</br>30/6/2024 ~ 1/7/2024
  - Latest update: 16/7/2024
    - Added responsive design
    - Consolidated multiple CSS files into one

## 2. Technologies Used

- HTML5
- CSS
- JavaScript

## 3. Project Goals

- Learn JavaScript basic through To-Do app clone coding
- Review previously learned HTML and CSS
- Utilise external APIs

## 4. Key Features

- Basic Implementation:

  - Random background image:</br>
    Displays a random background image from a predefined set of images.
  - Real-time clock display:</br>
    Shows the current date and time, updating every 10 seconds.
  - Login feature using local storage:</br>
    Allows users to log in by entering their name, which is saved in local storage.
  - To-Do list using local storage:</br>
    Users can add, cross out, and delete to-do items, with data stored in local storage.
  - User location and weather:</br>
    Fetches and displays the user's current weather information based on their location.
  - Random quotes and authors:</br>
    Displays a random quote and its author from a predefined list.

- Additional Implementation:
  - User reset (logout):</br>
    Provides a logout button for users to reset the application and remove stored data.
  - To-Do list completion indicator:</br>
    Allows users to mark to-do items as completed by crossing them out.
  - Clear To-Do list:</br>
    Adds functionality to clear all to-do items simultaneously, resetting the list.

## 5. Summary of Provided Code

- HTML Structure:</br>
  The HTML file defines the layout, including elements for login, greeting, date and clock display, to-do list, location and weather display, and quotes.
- CSS Styling:</br>
  CSS files style components such as the date and clock, login form, quotes, to-do list, and weather forecast. It ensures a visually appealing and user-friendly interface.
- JavaScript Functionality:</br>
  - background.js: Handles the display of random background images.
  - dateClock.js: Updates and displays the current date and time.
  - login.js: Manages user login, greeting display, and logout functionality.
  - quoteAuthor.js: Displays a random quote from a predefined list.
  - todo.js: Manages the to-do list, including adding, crossing out, and deleting items, with data stored in local storage.
  - locationWeather.js: Fetches and displays the user's current weather information using the OpenWeatherMap API based on location.
