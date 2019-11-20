exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Elly' },
        { id: 2, name: 'Jill' },
        { id: 3, name: 'Ash' }
      ])
    })
};
