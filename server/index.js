const cors = require("cors");

const express = require("express");
const app = express();

const port = 5000;

// const path = require("path");

// let folderBuildName = "build";

// app.use(express.static(`../${folderBuildName}`));

// app.get("*", (req, res) => {
//   try {
//     res.sendFile(path.join(__dirname, `../${folderBuildName}/index.html`));
//   } catch (err) {
//     res.status(404).json({
//       message: "PAGE ERROR: " + err.message,
//     });
//   }
// });
app.use(require("cors")());

app.interceptors.use(
  cors({
    origin: ["https://mkhoatd.me", "https://mkhoatd.me/predict_title"],
    credentials: true,
  })
);

app.interceptors.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://mkhoatd.me"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(`Ticket Web listening on port ${port}`);
});
