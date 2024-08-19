import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Mini Message Board - listening on port ${PORT}!`));
