const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const leaderboardRouter = require('./routes/leaderBoard.router');

require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/leaderboard", leaderboardRouter);

app.use((req, res) => {
  res.status(404).send("Invalid Route, Not Found!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
