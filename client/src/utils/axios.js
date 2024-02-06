import axios from "axios";

let baseURL =
  process.env.NODE_ENV === "production"
    ? "https://password-vault-01nh.onrender.com"
    : "http://localhost:5000";

const instance = axios.create({
  baseURL,
});

export default instance;
