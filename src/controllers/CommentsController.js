const knex = require("../database/knex");

class CommentsController {
    async create(request, response) {
        const { content } = request.body;
        const { post_id } = request.params;
        const [user] = await knex("posts").where({ id: post_id })
        const user_id = String(user.id)

        const [comment_id] = await knex("comments").insert({
            content,
            post_id,
            user_id
        });

        response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const comment = await knex("comments").where({ id }).first();

        return response.json(comment)
    }

    // async delete(request, response) {
    //     const { id } = request.params;

    //     await knex("posts").where({ id }).delete();

    //     return response.json();
    // }
}

module.exports = CommentsController;