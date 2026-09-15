//commonjs
const express = require("express");
const cors = require("cors");

//module
// import express from "express";
// import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());