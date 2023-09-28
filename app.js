const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const PORT = 3030;


app.use(express.static(path.join(__dirname,"public")));

app.use(methodOverride('_method'));

app.listen(PORT,() => console.log(`Server is runing in port http://localhost:${PORT}`))

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","home.html")))


