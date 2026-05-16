const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
// const host = process.env.HOST;

app.use("/", require("./routes"));

app.listen(port, () => console.log(`Running on port ${port}`));
