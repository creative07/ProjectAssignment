import axios from "axios";

export const userService = {
  user_service,
};

async function user_service(page) {
  var url = `https://reqres.in/api/users?page=${page}`;
  const response = await axios.get(url);
  return response;
}
