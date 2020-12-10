
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_id: 1, instruction: 'Get Pepper', recipe_id: 1},
        {step_id: 2, instruction: 'Get Salt', recipe_id: 1},
        {step_id: 3, instruction: 'Profit', recipe_id: 1}
      ]);
    });
};
