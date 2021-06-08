import axios from "axios";
export default (history = null) => {
  const baseURL = "https://randomuser.me/api/0.4/?randomapi";
  const headers = {
    Authorization: "",
  };
  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
  }
  const axiosInstance = axios.create({
    baseURL,
    headers,
  });
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error?.response?.status === 401) {
        history.push("/login");
      }
    }
  );
  return axiosInstance;
};
