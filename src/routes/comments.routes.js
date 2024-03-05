const { Router } = require("express");

const CommentsController = require("../controllers/CommentsController");

const commentsRoutes = Router();

const commentsController = new CommentsController();

commentsRoutes.post("/:post_id", commentsController.create);
commentsRoutes.get("/:id", commentsController.show);
commentsRoutes.delete("/:id", commentsController.delete);

module.exports = commentsRoutes;