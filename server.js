// load the things we need
var express = require('express');
var app = express();
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'SCP Foundation Escape', difficulty:'3/10', birth_year: 2012},
        { name: 'Eery Basement Escape', difficulty:'6/10', birth_year: 1996},
        { name: 'Ikea', difficulty:'11/10', birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.listen(8080);
console.log('8080 is the magic port');
