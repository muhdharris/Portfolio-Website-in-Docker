const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    message: "Welcome to my website!",
    year: 2024,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});