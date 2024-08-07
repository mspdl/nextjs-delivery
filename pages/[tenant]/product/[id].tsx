import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
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
  const [product, setProduct] = useState<ProductType>(data.product);

  return (
    <div className="">
      <Head>
        <title>
          {data.product.name} | {data.tenant.name}
        </title>
      </Head>
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
