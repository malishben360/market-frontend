import { apiClient } from "./api.js";

function authUser(user) {
  return apiClient.post("/users", user);
}

export { authUser };
