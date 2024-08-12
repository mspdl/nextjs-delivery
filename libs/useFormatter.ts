export const useFormatter = () => ({
  formatPrice: (price: number): string => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  },
  formatQuantity: (qt: number, digits: number) => {
    if (qt < 10) {
      return `${"0".repeat(digits - 1)}${qt}`;
    } else return qt;
  },
});
