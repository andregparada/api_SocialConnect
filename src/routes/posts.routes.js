const { Router } = require("express");

const PostsController = require("../controllers/PostsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const postsRoutes = Router();

const postsController = new PostsController();

postsRoutes.use(ensureAuthenticated);

postsRoutes.post("/", postsController.create);
postsRoutes.get("/:id", postsController.show);
postsRoutes.put("/:id", postsController.update);
postsRoutes.delete("/:id", postsController.delete);

module.exports = postsRoutes;