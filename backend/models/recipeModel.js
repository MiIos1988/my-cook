const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title: { type: String },
    instructions: { type: String },
    ingredients: { type: Array, default: [ {ingredient: { type: String }}, {quantity: { type: Number }}, {unit: { type: String }} ] },
    image: { type: String },
    readyInMinutes: { type: Number },
    preparationMinutes: { type: Number },
    vegetarian: { type: Boolean },

})

