
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'Marcos Special Sauce'},
        {recipe_id: 2, recipe_name: 'Damn Good Ramen'},
        {recipe_id: 3, recipe_name: 'Nana Float'}
      ]);
    });
};
