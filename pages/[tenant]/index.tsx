import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import { SearchInput } from "@/components/SearchInput";
import { useAppContext } from "@/contexts/app";
import { useApi } from "@/libs/useApi";
import { Product } from "@/types/Product";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const [products, setProducts] = useState<Product[]>(data.products);

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <div className="bg-white">
      <header className="bg-[#F9F9FB] pt-14 pr-6 pb-8 pl-6">
        <div className="flex justify-between items-center mb-7">
          <div className="">
            <h1 className="font-semibold text-2xl text-[#1b1b1b] mb-2">
              Welcome 👋
            </h1>
            <p className="font-normal text-base text-[#979797cc]">
              How can we help you?
            </p>
          </div>
          <div className="">
            <div className="w-6 h-5 flex flex-col justify-between">
              <div
                className={"h-1 rounded-md"}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={"h-1 rounded-md"}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={"h-1 rounded-md"}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
            </div>
          </div>
        </div>
        <SearchInput onSearch={handleSearch} />
      </header>

      <Banner />
      <div className="grid grid-cols-2 gap-6 mx-6">
        {products.map((product, index) => (
          <ProductItem key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
  products: Product[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const api = useApi(tenantSlug as string);
  const tenant = await api.getTenant();

  if (!tenant) {
    return { redirect: { destination: "/", permanent: false } };
  }

  const products = await api.getAllProducts();

  return { props: { tenant, products } };
};
