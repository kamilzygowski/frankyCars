const knex = require('./knex');

const getCars = () => {
    return knex("warehouses").select("*");
}

module.exports = {
    getCars
}