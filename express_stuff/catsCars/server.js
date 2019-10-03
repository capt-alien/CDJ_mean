const express = require("express");
const app = express();

// Plugins
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');




// Routes
app.get('/', (req, res) => {
    console.log("hitting index")
   res.render('index');
});

// cars
app.get('/cars', (req, res) => {
    console.log("hitting cars")
   res.render('cars');
});

// cats
app.get('/cats', (req, res) => {
    console.log("hitting cats")
   res.render('cats');
});


// app.get("/users", (req, res) => {
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"},
//         {name: "Jay", email: "jay@codingdojo.com"},
//         {name: "Brendan", email: "brendan@codingdojo.com"},
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     res.render('users', {users: users_array});
// })






app.listen(8000, () => console.log("listening on port 8000"));
