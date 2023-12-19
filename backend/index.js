const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vairamuthu:vairamuthu@cluster0.2qcddvx.mongodb.net/BlockBattle"
);
const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/api");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
