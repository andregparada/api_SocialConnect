const knex = require("../database/knex");

class PostsController {
    async create(request, response) {
        const { title, content } = request.body;
        const { user_id } = request.params;

        const [post_id] = await knex("posts").insert({
            title,
            content,
            user_id
        });

        response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const post = await knex("posts").where({ id }).first();

        const comments = await knex("comments").where({ post_id: id })
        console.log(comments)

        return response.json({
            ...post,
            comments
        })
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("posts").where({ id }).delete();

        return response.json();
    }
}

module.exports = PostsController;