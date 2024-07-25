import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import SearchInput from "@/components/SearchInput";
import { useApi } from "@/libs/useApi";
import { GetServerSideProps } from "next";

const Tenant = () => {
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
              <div className="bg-[#fb9400] h-1 rounded-md"></div>
              <div className="bg-[#fb9400] h-1 rounded-md"></div>
              <div className="bg-[#fb9400] h-1 rounded-md"></div>
            </div>
          </div>
        </div>
        <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
      </header>

      <Banner />
      <div className="grid grid-cols-2 gap-6 mx-6">
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/burger.png",
            name: "Texas Burger",
            categoryName: "Tradicional",
            price: "R$ 25,00",
          }}
          mainColor="#fb9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            name: "Texas Burger",
            categoryName: "Tradicional",
            price: "R$ 25,00",
          }}
          mainColor="#fb9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/burger.png",
            name: "Texas Burger",
            categoryName: "Tradicional",
            price: "R$ 25,00",
          }}
          mainColor="#fb9400"
          secondColor="#FFF9F2"
        />
      </div>
    </div>
  );
};

export default Tenant;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const api = useApi();
  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: { tenant } };
};
