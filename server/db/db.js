const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getUser (id, database = db) {
  return database('users')
    .where('id', id)
    .first()
}

module.exports = {
  getUser
}
