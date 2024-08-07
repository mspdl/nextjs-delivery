import { Product } from "@/types/Product";

const TEMPORARY_PRODUCT: Product = {
  id: 1,
  image: "/tmp/burger.png",
  name: "Texas Burger",
  categoryName: "Tradicional",
  price: 25,
  description:
    "2 150g meat blends, Cheddar cheese,Caramelized bacon, Salad, House sauce, Artisan brioche bread",
};

export const useApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      case "spdlburger":
        return {
          slug: "spdlburger",
          name: "SPDL Burger",
          mainColor: "#FB9400",
          secondColor: "#FFF9F2",
        };
      case "spdlpizza":
        return {
          slug: "spdlpizza",
          name: "SPDL Pizza",
          mainColor: "#6AB70A",
          secondColor: "#E0E0E0",
        };
      default:
        return false;
    }
  },

  getAllProducts: async () => {
    let products = [];
    for (let i = 0; i < 5; i++) {
      products.push(TEMPORARY_PRODUCT);
    }
    return products;
  },

  getProductById: async (productId: string) => {
    return TEMPORARY_PRODUCT;
  },
});
