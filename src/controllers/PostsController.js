const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class PostsController {
    async create(request, response) {
        const { title, content } = request.body;
        const user_id = request.user.id;

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

        if(!post) {
            throw new AppError("Post não encontrado.")
        }

        const comments = await knex("comments").where({ post_id: id })

        return response.json({
            ...post,
            comments
        })
    }

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.user.id;

        const [post] = await knex("posts").where({ id });

        if(post.user_id !== user_id) {
            throw new AppError("Você só pode deletar posts seus!")
        }

        await knex("posts").where({ id }).delete();

        return response.json();
    }
}

module.exports = PostsController;