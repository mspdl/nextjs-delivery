import { Tenant } from "@/types/Tenant";

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
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
});
