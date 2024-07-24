export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "spdlburger":
        return {
          name: "SPDL Burger",
          mainColor: "#f00",
          secondColor: "#0f0",
        };
      case "spdlpizza":
        return {
          name: "SPDL Burger",
          mainColor: "#00f",
          secondColor: "#0f0",
        };
      default:
        return false;
    }
  },
});
