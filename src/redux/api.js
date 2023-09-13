// api.js
import axios from "axios";

const BASE_URL = "https://your-api-url.com"; // Replace with your API URL

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create more API functions as needed
