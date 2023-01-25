import axios from "axios";

const instance = axios.create({
  baseURL: "https://password-manager-app.vercel.app",
});

export default instance;
