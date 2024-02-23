const knex = require("../database/knex");

class PostsController {
    async create(request, response) {
        const { title, content } = request.body;
        const { user_id } = request.params;

        const post_id = await knex("posts").insert({
            title,
            content,
            user_id
        });

        response.json();
    }
}

module.exports = PostsController;