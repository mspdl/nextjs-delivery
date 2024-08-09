import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ForgetSent = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  const router = useRouter();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const handleLogin = () => {
    router.push(`/${data.tenant.slug}/login`);
  };

  return (
    <div className="bg-white py-12 px-6 ">
      <Head>
        <title>E-mail sent | {data.tenant.name}</title>
      </Head>
      <Header
        color={data.tenant.mainColor}
        backHref={`/${data.tenant.slug}/forget`}
      />

      <div className="flex justify-center mt-24 mx-auto mb-14">
        <Icon
          iconName="mailSent"
          color={data.tenant.mainColor}
          width={99}
          height={81}
        />
      </div>

      <div className="font-semibold text-2xl text-center mb-8">
        Check your e-mail
      </div>

      <div className="font-normal text-lg text-[#1b1b1bcc] text-center m-auto w-[60%]">
        We have sent password recovery instructions to your email.
      </div>

      <div className="mt-10">
        <div>
          <Button
            color={data.tenant.mainColor}
            label="Got to Login"
            onClick={handleLogin}
            isFilled
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetSent;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const api = useApi(tenantSlug as string);
  const tenant = await api.getTenant();

  if (!tenant) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: { tenant } };
};
