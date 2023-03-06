import { apiClient } from "./api.js";

function getRecipes() {
  return apiClient.get("/recipes");
}

function postRecipe(recipe) {
  return apiClient.post("/recipes", recipe);
}

export { getRecipes, postRecipe };
