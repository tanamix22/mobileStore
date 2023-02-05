import axios from "axios";

//service to obtain products with the functionalities of saving in memory to avoid unnecessary calls.
const getDataFromAPI = async () => {
    const response = await axios.get(
      "https://my-store-backend.up.railway.app/api/v1/products"
    );
    return response.data;
};


const setDataInStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("timestamp", Date.now());
  };
  

  const getDataFromStorage = () => {
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

//Functionalities to obtain product by id and post cart, data persistence was not carried out because each query can give a different answer and body due to application logic, it would not be convenient.
export const getProductById = async (id) => {
    const response = await axios.get(
      `https://my-store-backend.up.railway.app/api/v1/products/${id}`
    );
    return response.data;
};

export const postProductCart = async (body) => {
  const response = await axios.post(
    `https://my-store-backend.up.railway.app/api/v1/products`,
    body
  );
  return response.data;
};

export default { getData, getProductById, postProductCart };
