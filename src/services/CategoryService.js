import { apiClient } from "./api.js";

function getCategories() {
  return apiClient.get("/categories");
}

function postCategory(category) {
  return apiClient.post("/categories", category);
}

export { getCategories, postCategory };
