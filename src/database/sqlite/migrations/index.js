const sqliteConnection = require("../../sqlite");

async function migrationsRun() {

    sqliteConnection()
        .catch(error => console.error(error));
}

module.exports = migrationsRun;