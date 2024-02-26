const knex = require("../database/knex");

class CommentsController {
    async create(request, response) {
        const { content } = request.body;
        const { post_id } = request.params;
        const [user] = await knex("posts").where({ id: post_id })
        const user_id = user.id

        const [comment_id] = await knex("comments").insert({
            content,
            post_id,
            user_id
        });

        response.json();
    }

    // async show(request, response) {
    //     const { id } = request.params;

    //     const post = await knex("posts").where({ id }).first();

    //     return response.json(post)
    // }

    // async delete(request, response) {
    //     const { id } = request.params;

    //     await knex("posts").where({ id }).delete();

    //     return response.json();
    // }
}

module.exports = CommentsController;