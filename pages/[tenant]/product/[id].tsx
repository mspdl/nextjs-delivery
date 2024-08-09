import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Quantity } from "@/components/Quantity";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { useFormatter } from "@/libs/useFormatter";
import { Product as ProductType } from "@/types/Product";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Product = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const [qtCount, setQtCount] = useState(0);

  const formatter = useFormatter();

  const handleAddToCart = () => {};

  return (
    <div className="container bg-white">
      <Head>
        <title>
          {data.product.name} | {data.tenant.name}
        </title>
      </Head>
      <div className="headerArea absolute left-6 top-16 right-6">
        <Header
          color={data.tenant.mainColor}
          backHref={`/${data.tenant.slug}`}
          title={data.product.name}
          invert
        />
      </div>
      <div
        className="headerBg w-[100vw] h-96 bg-[#333] bg-[url('/assets/product-bg.png')] bg-no-repeat bg-cover"
        style={{ backgroundColor: data.tenant.mainColor }}
      ></div>
      <div className="productImage w-[100vw] mt-[-250px] flex justify-center">
        <img
          className="w-auto h-96"
          src={data.product.image}
          alt={data.product.name}
        />
      </div>
      <div className="mx-6">
        <div className="category font-medium text-base text-[#1b1b1b]">
          {data.product.categoryName}
        </div>
        <div
          className="title font-semibold text-5xl text-[#1b1b1b] pb-6 border-b-2 border-black w-fit relative"
          style={{ borderBottomColor: data.tenant.mainColor }}
        >
          {data.product.name}
        </div>
        <div className="line border-t-2 border-[#e2e2e2] mt-[-2px] mx-6 mb-4"></div>

        <div className="description font-normal text-base text-[#1b1b1b]/[.5] mb-8">
          {data.product.description}
        </div>
        <div className="qtdText font-normal text-base text-[#1b1b1b] mb-4">
          Quantity
        </div>
        <div className="area mx-6 flex items-ce">
          <div className="areaLeft">
            <Quantity
              color={data.tenant.mainColor}
              count={qtCount}
              onUpdadeCount={setQtCount(1)}
              min={1}
              max={10}
            />
          </div>
          <div
            className="areaRight flex-1 text-right font-semibold text-4xl text-black"
            style={{ color: data.tenant.mainColor }}
          >
            {formatter.formatPrice(data.product.price)}
          </div>
        </div>
      </div>
      <div className="buttonArea w-[100vw] px-6 my-14">
        <Button
          color={data.tenant.mainColor}
          label="Add to cart"
          onClick={handleAddToCart}
          isFilled
        />
      </div>
    </div>
  );
};

export default Product;

type Props = {
  tenant: Tenant;
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, id: productId } = context.query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const api = useApi(tenantSlug as string);
  const tenant = await api.getTenant();

  if (!tenant) {
    return { redirect: { destination: "/", permanent: false } };
  }

  const product = await api.getProductById(productId as string);

  return { props: { tenant, product } };
};
