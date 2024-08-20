import { Router } from "express";

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form", { title: "New Message" });
});

export default newRouter;
