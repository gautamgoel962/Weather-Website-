//Including the express module
const express = require('express');
const app = express();

// Including the path module.
const path = require('path');

// Including the hbs module. 
const hbs = require('hbs');

// Including the port module. 
const port = process.env.PORT || 8000;

// Setting the view-engine as handlebars. 
app.set('view engine', 'hbs');

// To serve the Static files inside the views folder. 
app.use(express.static(path.join(__dirname, '../public2/views')));

// To serve the dynamic files i.e. hbs files. 
app.set('views', path.join(__dirname, '../public2/views'));

// To register the partials. 
hbs.registerPartials(path.join(__dirname, '../public2/partials'));

// Routing . 

// Setting the home page. 
app.get('/', (req, res) => {
    res.render('index');
})

// Setting the about page. 
app.get('/about',(req, res)=>{
    res.render('about');
})

// Setting the weather page. 
app.get('/weather', (req, res) => {
    res.render('weather');
})

// If the requested page is invalid then render the 404.hbs 
app.get('/*', (req, res) => {
    res.render('404');
})

// Listening to the port. 
app.listen(port, () => {
    console.log(`Listening to the port number: ${port}`);
})
