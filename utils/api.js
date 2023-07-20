import axios from "axios";

const api = axios.create({
  baseURL: "https://jeffy-realty.onrender.com/api",
});

export default api;

// export const getData = async () => {
//   const data = await api.get("api/houses");

//   console.log(data || "empty", "house");

//   return data?.data;
// };

// getData();
