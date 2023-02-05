export const setDraweView = (adjustment) => {
  if (adjustment <= 648) {
    return adjustment
  }
  return 500
}

export const getProduct = (products, id) => {
  const filteredProduct = products.find((product) => product.productId + '' === id)
  return filteredProduct
}

export const imageFirst = (arr, index) => {
  [arr[0], arr[index]] = [arr[index], arr[0]]

  return arr
}

export const StyleGrid = (products) => {
  let style = {}
  if(products.length <= 3 ){
    style = {
      justifyContent: 'center'
    };
  }
  return style
}

export const SearchFilter = (Products, word) => {
  let filter = Products.filter((element) =>(element.model+element.brand).toUpperCase().includes(word?.toUpperCase()));
  return filter;
}

export const localStoreCart = (res) => {
  let count = localStorage.getItem("cartCount")
  if (count !== null) {
    localStorage.setItem("cartCount", res.count +  Number(count));
    localStorage.setItem("timestampCount", Date.now());
  }else{
    localStorage.setItem("cartCount", res.count );
    localStorage.setItem("timestampCount", Date.now());
  } 
}

export const getDataCountFromStorage = () => {
  const cartCount = localStorage.getItem("cartCount");
  const timestampCount = localStorage.getItem("timestampCount");
  if (cartCount && timestampCount && Date.now() - timestampCount < 60 * 60 * 1000) {
    return JSON.parse(cartCount);
  }
  return null;
};