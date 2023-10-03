import axios from "axios";

export const login = async (credentials) =>{ 
   try{
    const response = await axios.post('/api/auth/login', credentials);
    return response.data.user; 
    } catch (error) {
        throw error.response.data; 
    }

}

export const register = async (userData) => {
  try {
    const response = await axios.post('/api/auth/register', userData);
    return response.data.user; 
  } catch (error) {
    throw error.response.data; 
  }

}