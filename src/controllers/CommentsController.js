const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CommentsController {
    async create(request, response) {
        const { content } = request.body;
        const { post_id } = request.params;
        const user_id = request.user.id
        console.log(post_id)


        const [originalPost] = await knex("posts").where({ id: post_id });

        if (!originalPost) {
            throw new AppError("Post não encontrado")
        }

        await knex("comments").insert({
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

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.user.id;

        const [comment] = await knex("comments").where({ id });

        if(comment.user_id !== user_id) {
            throw new AppError("Você só pode deletar comentários seus!")
        }

        await knex("comments").where({ id }).delete();

        return response.json();
    }
}

module.exports = CommentsController;