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
          mainColor: "#FB9400",
          secondColor: "#FFF9F2",
        };
      case "spdlpizza":
        return {
          name: "SPDL Pizza",
          mainColor: "#6AB70A",
          secondColor: "#E0E0E0",
        };
      default:
        return false;
    }
  },
});
