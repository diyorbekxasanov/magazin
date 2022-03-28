import axios from "axios";

export const albumsAxios = async () => {
  try {
    const res = await axios.get(
      "https://trucking-times.com/api/public/api/getContacts"
    );
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
