import axios from "axios";

const client = axios.create(
  {
    baseURL: "http://anarock.vayuz.com",
  },
  {
    withCredentials: true,
  }
);

export default client;
