import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import SearchInput from "@/components/SearchInput";

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
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default Tenant;
