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
