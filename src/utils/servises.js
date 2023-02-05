import axios from "axios";


export const getProductById = async (id) => {
    const response = await axios.get(
      `https://my-store-backend.up.railway.app/api/v1/products/${id}`
    );
    return response.data;
};


export const getDataFromAPI = async () => {
    const response = await axios.get(
      "https://my-store-backend.up.railway.app/api/v1/products"
    );
    return response.data;
};


export const setDataInStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("timestamp", Date.now());
  };
  

  export const getDataFromStorage = () => {
    const data = localStorage.getItem("data");
    const timestamp = localStorage.getItem("timestamp");
    if (data && timestamp && Date.now() - timestamp < 60 * 60 * 1000) {
      return JSON.parse(data);
    }
    return null;
  };
  

export const getData = async () => {
    const data = getDataFromStorage();
    if (data) {
      return data;
    }
    const dataFromAPI = await getDataFromAPI();
    setDataInStorage(dataFromAPI);
    return dataFromAPI;
  };
  
  export default { getData, getProductById };
