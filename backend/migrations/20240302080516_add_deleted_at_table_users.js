
exports.up = function(knex) {
    return knex.schema.alterTable('user', table => {
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('user', table => {
        table.dropColumn('deletedAt')
    })
};
