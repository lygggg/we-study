import axios from "axios";

export const getQuestion = async ({ category }): Promise<any> => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_API}/quiz`, {
      category,
    });
    return data;
  } catch (e) {
    // if (confirm("retry ")) {
    //   return getQuestion();
    // }
    // throw e;
  }
};
