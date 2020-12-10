
exports.up = function(knex) {
  return knex.schema
                .createTable('recipes', (table) => {
                    table.increments('recipe_id')
                    table.string('recipe_name', 128).notNullable()
                })
                .createTable('ingredients', (table) => {
                    table.increments('ingredient_id')
                    table.string('ingredient_name', 128).notNullable()
                })
                .createTable('instructions', (table) => {
                    table.increments('step_id')
                    table.string('instruction', 128).notNullable()
                    table.integer('recipe_id')
                                            .unsigned()
                                            .notNullable()
                                            .references('recipe_id').inTable('recipes')
                                            .onDelete('RESTRICT').onUpdate('RESTRICT')
                })
                .createTable('recipe_ingredients', (table) => {
                    table.increments()
                    table.integer('recipe_id')
                                            .unsigned()
                                            .notNullable()
                                            .references('recipe_id').inTable('recipes')
                                            .onDelete('RESTRICT').onUpdate('RESTRICT')
                    table.integer('ingredient_id')
                                            .unsigned()
                                            .notNullable()
                                            .references('ingredient_id').inTable('ingredients')
                                            .onDelete('RESTRICT').onUpdate('RESTRICT')
                    table.float('quantity').notNullable()
                })
};

exports.down = function(knex) {
  return knex.schema
                .dropTableIfExists('recipe_ingredients')
                .dropTableIfExists('instructions')
                .dropTableIfExists('ingredients')
                .dropTableIfExists('recipes')
};
