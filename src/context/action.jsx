import { apiGet, tryCatch } from "../utils";

export const getUsers = async () => {
  const res = tryCatch(() =>
    apiGet("https://jsonplaceholder.typicode.com/users")
  );
  console.log(res, "response from getUsers");
};
