const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});