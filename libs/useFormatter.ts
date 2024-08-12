export const useFormatter = () => ({
  formatPrice: (price: number): string => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  },
  formatQuantity: (qt: number, minDigits: number) => {
    const remain = minDigits - qt.toString().length;

    if (qt.toString().length >= minDigits) return qt.toString();

    return `${"0".repeat(remain)}${qt}`;
  },
});
