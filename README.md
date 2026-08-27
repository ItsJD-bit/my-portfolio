# JD — Personal Portfolio

A minimalist personal portfolio website built with Node.js, Express, EJS, HTML, CSS, and JavaScript.

The project focuses on a simple black-and-white visual system, strong typography, clean layouts, subtle interactions, and smooth page transitions.

---

## Overview

This portfolio was designed around a simple idea:

> Keep the interface simple. Let the work speak.

The design avoids unnecessary gradients, excessive shadows, complicated UI components, and distracting animations.

Instead, it uses:

- Black and white colors
- Flat design
- Large typography
- Thin borders
- Generous whitespace
- Minimal interactions
- Smooth page transitions
- Responsive layouts

---

## Features

### Portfolio

- Personal introduction
- About section
- Project showcase
- Individual project pages
- Contact page
- Responsive navigation

### Project System

Projects are managed from a centralized JavaScript data file.

Each project can contain:

- Project title
- Project number
- Year
- Description
- Detailed description
- Technologies
- Role
- Features
- GitHub link
- Live project link
- Project image

Adding a new project does not require manually rebuilding the project page.

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- EJS

### Backend

- Node.js
- Express.js

### Development

- npm
- Nodemon

---

## Project Structure

```text
portfolio/
│
├── app.js
├── package.json
├── README.md
│
├── data/
│   └── projects.js
│
├── routes/
│   └── index.js
│
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── project.ejs
│   └── contact.ejs
│
└── public/
    │
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── main.js
    │
    └── images/
        ├── library.jpg
        ├── pos.jpg
        └── portfolio.jpg