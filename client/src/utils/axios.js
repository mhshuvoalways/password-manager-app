import axios from "axios";

const instance = axios.create({
  baseURL: "https://password-manager-app.cyclic.app",
});

export default instance;
