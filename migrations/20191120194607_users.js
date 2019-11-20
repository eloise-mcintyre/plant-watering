exports.up = (knex) =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
  })

exports.down = (knex) => knex.schema.dropTable('users')
