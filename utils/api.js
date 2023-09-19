import axios from "axios";

const api = axios.create({
  baseURL: "https://jeffy-realty.onrender.com/api",
});

export default api;


export async function fetcher(url, options = {}) {
  let response;

  try {
    if (!options) {
      response = await api.get(url);
    } else {
      response = await api.get(url, options);
    }
  } catch (err) {
    throw err;
    console.log(err)
  }

  return response?.data;
}
