const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🏠 Welcome to Home Page");
});

// About route
app.get("/about", (req, res) => {
  res.send("📘 This is About Page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("📞 Contact us at example@email.com");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});