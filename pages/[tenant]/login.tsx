import { Header } from "@/components/Header";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className="bg-white pt-12">
      <Head>
        <title>Login | {data.tenant.name}</title>
      </Head>
      <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`} />
      <div>Login</div>
    </div>
  );
};

export default Login;

type Props = {
  tenant: Tenant;
};

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
