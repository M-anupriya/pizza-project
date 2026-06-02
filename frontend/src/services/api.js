import axios from "axios";

const API = axios.create({
  baseURL: "https://pizza-project-1-xosi.onrender.com/api",
});

export default API;