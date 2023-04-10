import axios from "axios";

let baseURL =
  process.env.NODE_ENV === "production"
    ? "https://password-vault.vercel.app"
    : "http://localhost:5000";

const instance = axios.create({
  baseURL,
});

export default instance;
