const { Router } = require("express");

const usersRouter = require("./users.routes")
const sessionsRouter = require("./sessions.routes")
const postsRouter = require("./posts.routes")
const commentsRouter = require("./comments.routes")

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/posts", postsRouter);
routes.use("/comments", commentsRouter);

module.exports = routes;