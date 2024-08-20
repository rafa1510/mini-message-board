import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Mini Message Board - listening on port ${PORT}!`));
