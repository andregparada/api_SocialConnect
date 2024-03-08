const knex = require("../database/knex");
const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        if(!name || !email || !password) {
            throw new AppError("Todos os campos são obrigatórios.")
        }

        // const database = await sqliteConnection();
        // const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        const [checkUserExists] = await knex("users").where({ email });
        

        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashedPassword = await hash(password, 8);

        // await database.run(
        //     "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        //     [name, email, hashedPassword]
        // );
        await knex("users").insert(({
            name,
            email,
            password: hashedPassword
        }));

        return response.status(201).json();
    }

    async update(request, response) {
        const{ name, email, password, old_password } = request.body;
        const id = request.user.id;

        const database = await sqliteConnection();
        // const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);
        const [user] = await knex("users").where({ id });

        if(!user){
            throw new AppError("Usuário não encontrado.");
        }

        // const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        const [userWithUpdatedEmail] = await knex("users").where({ email });

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir nova senha.");
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere.");
            }

            user.password = await hash(password, 8);
        }
        
        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [user.name, user.email, user.password,  id]
        );

        return response.json()
    };

    async show(request, response) {
        const { id } = request.params;

        const user = await knex("users").where({ id }).first();

        return response.json(user)
    }

    async delete(request, response) {
        const id = request.user.id;

        await knex("users").where({ id }).delete();

        return response.json();
    }   
}

module.exports = UsersController;