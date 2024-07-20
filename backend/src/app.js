import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello Nestian!" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello Nestian by backend!" });
});

export default app;
