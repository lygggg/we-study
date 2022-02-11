import axios from "axios";

export const getSearch = async (query): Promise<any> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_API}/search` + `?query=${query}`,
    );
    return data;
  } catch (e) {
    // if (confirm("retry ")) {
    //   return getQuestion();
    // }
    // throw e;
  }
};
