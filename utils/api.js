import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
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
  }

  return response?.data;
}
