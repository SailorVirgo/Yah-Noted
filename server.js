const express = require('express');
const noteRoutes = require("./noteAPIRoutes")
const htmlRoutes = require("./htmlRoutes")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API Routes
app.use("/api/notes", noteRoutes)

// HTML Routes
app.use("/", htmlRoutes)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
