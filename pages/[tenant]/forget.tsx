import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { InputField } from "@/components/InputField";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Forget = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");

  const router = useRouter();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const handleForget = () => {
    router.push(`${data.tenant.slug}/forget-sent`)
  };

  return (
    <div className="bg-white py-12 px-6 ">
      <Head>
        <title>Forget password | {data.tenant.name}</title>
      </Head>
      <Header
        color={data.tenant.mainColor}
        backHref={`/${data.tenant.slug}/login`}
      />

      <div className="font-semibold text-4xl mt-5 mb-10 text-center">
        {data.tenant.name}
      </div>

      <div className="font-semibold text-2xl text-center mb-8">
        Forget your password?
      </div>

      <div
        className="font-normal text-lg text-[#1b1b1bcc] text-center m-auto w-[80%] pb-10 border-b-2 relative"
        style={{ borderColor: data.tenant.mainColor }}
      >
        Fill in the field with your email and receive the necessary instructions
        to reset your password.
      </div>

      <div className="border-b-2 border-[#e2e2e2] mt-[-2px]"></div>

      <div className="mt-14">
        <div className="mb-8">
          <InputField
            color={data.tenant.mainColor}
            placeholder="Type your e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div>
          <Button
            color={data.tenant.mainColor}
            label="Reset password"
            onClick={handleForget}
            isFilled
          />
        </div>
      </div>
    </div>
  );
};

export default Forget;

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
