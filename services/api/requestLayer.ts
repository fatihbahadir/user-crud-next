import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default apiClient;