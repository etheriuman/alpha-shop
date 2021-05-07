// price comma setter
export const priceCommaSetter = {
  filters: {
    commaSetter(price) {
      // RE
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}