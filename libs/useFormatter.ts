export const useFormatter = () => ({
  formatPrice: (price: number): string => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  },
});
