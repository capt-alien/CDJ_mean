const express = require("express");
const app = express()

// Pluggins
// Plugins
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// Routes
app.get('/', (req, res) => {
    console.log("hitting index")
   res.render('index');
   // res.send("Sub bub!")
});


app.listen(6960, () => console.log("listening on port 6960"));
