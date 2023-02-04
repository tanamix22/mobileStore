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