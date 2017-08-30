

const express = require('express');

// Create an Express app object. Everything about backend will be set up here
const app = express();

// Tell express that our HTML files are in the "htmls/"
app.set('views', 'htmls');

// Tell express that our html files are in the EJS format
app.set('view engine', 'ejs' );

// Tell Express that we have static files in our "public/" folder
app.use(express.static('public'));

// Our first Express route
// A route defines a URL/ page on our Website
// Each app.get is a page
// Anatomy of a route: app.VERB('/URL', CALLBACK);
app.get('/', (request, response, next)=>{
  // Code that will be run every time a user visits the page
  //  Decides what content to respond with

  // Send the contents of the views/home.ejs file to the browser
  response.render('home.ejs');
});

// Tells Express that we want to start accepting connections
app.listen(3001);


// localhost:3000/about
app.get('/about', (request, response, next)=>{
  response.render('about-page.ejs')
});


app.get('/about', (request, response, next)=>{
  response.render('photo-gallery.ejs')
});
