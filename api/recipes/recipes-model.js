const db = require('../../data/dbConfig')

module.exports = {
    getRecipes() {
        return db('recipes')
    },
    getShoppingList(recipe_id) {
        return db('ingredients as i')
                            .join('recipes as r', 'r.recipe_id', 'i.recipe_id')
                            .select('r.recipe_name','ingredient_name', 'quantity')
                            .where('recipe_id', recipe_id)
    },
    getInstructions(recipe_id) {
        return db('instructions as i')
                            .join('recipes as r', 'r.recipe_id', 'i.recipe_id')
                            .select('recipe_name','step_id', 'instruction')
                            .where('r.recipe_id', recipe_id)
                            .orderBy('step_id', 'asc')
    }
}