import express from "express";
// const express = require('express');

import { dirname } from "path";
import { fileURLToPath } from "url";

// const express = require('express');

const app = express();
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/images',express.static(__dirname + '/src/statics'));
app.use(express.static("./dist"));
app.get("*", (req, res) => {
  res.sendFile("./dist/index.html", { root: __dirname });
});
console.log(__dirname)


app.use((req, res) => {
  res.status(404).send("./dist");
});

app.listen(PORT, function () {
  console.log("running");
});
