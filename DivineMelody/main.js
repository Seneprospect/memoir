const express = require('express');
const nodemon = require("nodemon");
const app = express();
const AccueilCtrl = require("./Controllers/AccueilCtrl");
const expressEjsLayouts = require('express-ejs-layouts');
const layouts = require("express-ejs-layouts");
app.set("port", process.env.port || 3000);
app.set('view engine', 'ejs');
app.use(layouts);
app.get("/", AccueilCtrl.showAccueil);
app.get("/podcasts", AccueilCtrl.showPodcasts);
app.get("/about", AccueilCtrl.showAbout);
app.get("/contact", AccueilCtrl.showContact);
app.listen(app.get('port'), () => {
    console.log('server running at http://localhost:${app.get("port")}');
});