const projects = [
    {
        id: "library-management",
        number: "01",
        year: "2026",

        title: "LIBRARY MANAGEMENT SYSTEM",

        description:
            "A web-based library management system designed to simplify library operations, patron management, attendance tracking, room reservations, and internet usage.",

        longDescription:
            "This system was designed as an all-in-one digital platform for managing day-to-day library operations. It combines patron management, attendance, discussion room reservations, internet room sessions, and administrative tools into a single interface.",

        technologies: [
            "NODE.JS",
            "EXPRESS",
            "EJS",
            "SQLITE",
            "JAVASCRIPT"
        ],

        role: "FULL-STACK DEVELOPMENT",

        features: [
            "Patron registration and management",
            "Barcode-based attendance",
            "Discussion room reservations",
            "Internet room management",
            "Administrative dashboard",
            "Usage tracking and reporting"
        ],

        github: "https://github.com/ItsJD-bit/libraryworkspace.git",
        live: "https://libraryworkspace.onrender.com"
    },

    {
        id: "pos-system",
        number: "02",
        year: "2026",

        title: "POINT OF SALE SYSTEM",

        description:
            "A lightweight point-of-sale system focused on fast product selection, cart management, and transaction handling.",

        longDescription:
            "The POS project focuses on creating a straightforward interface for handling products and transactions. The interface prioritizes speed and clarity so that common actions require as few steps as possible.",

        technologies: [
            "NODE.JS",
            "EXPRESS",
            "JAVASCRIPT",
            "SQLITE"
        ],

        role: "FULL-STACK DEVELOPMENT",

        features: [
            "Product management",
            "Shopping cart",
            "Quantity management",
            "Transaction processing",
            "Inventory tracking"
        ],

        github: "#",
        live: "#"
    },

    {
        id: "personal-portfolio",
        number: "03",
        year: "2026",

        title: "PERSONAL PORTFOLIO",

        description:
            "A minimalist personal portfolio built around typography, whitespace, interaction, and a strict black-and-white visual system.",

        longDescription:
            "This portfolio was designed to demonstrate that a website can have personality without relying on gradients, excessive animations, or complicated visual effects. The design uses typography, spacing, borders, and subtle interactions as its primary visual language.",

        technologies: [
            "NODE.JS",
            "EXPRESS",
            "EJS",
            "CSS",
            "JAVASCRIPT"
        ],

        role: "DESIGN + DEVELOPMENT",

        features: [
            "Minimalist interface",
            "Responsive design",
            "Page transitions",
            "Dynamic project system",
            "Typography-focused layout"
        ],

        github: "https://github.com/ItsJD-bit/my-portfolio.git",
        live: "https://edenisme.onrender.com/"
    }
];

module.exports = projects;