const { Router } = require("express");

const CommentsController = require("../controllers/CommentsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const commentsRoutes = Router();

const commentsController = new CommentsController();

commentsRoutes.use(ensureAuthenticated);

commentsRoutes.post("/:post_id", commentsController.create);
commentsRoutes.get("/:id", commentsController.show);
commentsRoutes.put("/:id", commentsController.update);
commentsRoutes.delete("/:id", commentsController.delete);

module.exports = commentsRoutes;