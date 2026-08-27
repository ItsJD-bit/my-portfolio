const express = require("express");
const path = require("path");

const projects = require("./data/projects");

const app = express();

const PORT = process.env.PORT || 3000;


// =========================
// CONFIGURATION
// =========================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// =========================
// STATIC FILES
// =========================

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// =========================
// HOME
// =========================

app.get("/", (req, res) => {

    res.render("index", {
        projects: projects.slice(0, 3)
    });

});


// =========================
// ABOUT
// =========================

app.get("/about", (req, res) => {

    res.render("about");

});


// =========================
// PROJECTS
// =========================

app.get("/projects", (req, res) => {

    res.render("projects", {
        projects
    });

});


// =========================
// INDIVIDUAL PROJECT
// =========================

app.get("/projects/:id", (req, res) => {

    const project = projects.find(
        item => item.id === req.params.id
    );

    if (!project) {
        return res.status(404).send("Project not found");
    }

    res.render("project", {
        project
    });

});


// =========================
// CONTACT
// =========================

app.get("/contact", (req, res) => {

    res.render("contact");

});


// =========================
// SERVER
// =========================

app.listen(PORT, () => {

    console.log(
        `Portfolio running at http://localhost:${PORT}`
    );

});