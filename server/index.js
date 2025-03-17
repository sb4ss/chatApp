import express from "express";
import logger from "morgan";

const app = express(); // Create express App
app.use(logger("dev")); // Logs request console
const PORT = process.env.PORT || 3000; // Port

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
