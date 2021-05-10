// price comma setter
export const priceCommaSetter = {
  filters: {
    commaSetter(price) {
      return price.toLocaleString()
    }
  }
}