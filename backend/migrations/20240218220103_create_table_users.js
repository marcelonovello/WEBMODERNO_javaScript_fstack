exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', table => {
        table.increments('id').primary()
        table.string('Nome').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').defaultTo(false)

    })

};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user')
};

