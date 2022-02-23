const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "db.sqlite"
    }
});

module.exports = connectedKnex;