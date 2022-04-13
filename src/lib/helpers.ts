import axios from "axios";

export async function axiosGet(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Request made and server responded
      return error.response.data;
    }
    return null;
  }
}
