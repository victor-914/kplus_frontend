import axios from "axios";

const api = axios.create({
  baseURL: "https://jeffy-realty.onrender.com/api",
});

export default api;
