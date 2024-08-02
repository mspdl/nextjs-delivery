import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { InputField } from "@/components/InputField";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUp = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const handleRegister = () => {};

  return (
    <div className="bg-white py-12 px-6 ">
      <Head>
        <title>Register | {data.tenant.name}</title>
      </Head>
      <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}/login`} />

      <div className="font-semibold text-4xl mt-5 mb-10 text-center">
        {data.tenant.name}
      </div>

      <div
        className="font-normal text-lg text-[#1b1b1bcc] text-center m-auto w-[50%] pb-10 border-b-2 relative"
        style={{ borderColor: data.tenant.mainColor }}
      >
        Complete the fields to create your registration.
      </div>

      <div className="border-b-2 border-[#e2e2e2] mt-[-2px]"></div>

      <div className="mt-14">
        <div className="mb-8">
          <InputField
            color={data.tenant.mainColor}
            placeholder="Type your name"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="mb-8">
          <InputField
            color={data.tenant.mainColor}
            placeholder="Type your e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className="mb-8">
          <InputField
            color={data.tenant.mainColor}
            placeholder="Type your password"
            value={password}
            onChange={setPassword}
            isPassword
          />
        </div>

        <div className="mb-8">
          <Button
            color={data.tenant.mainColor}
            label="Register"
            onClick={handleRegister}
            isFilled
          />
        </div>
      </div>
      <div className="text-base font-normal text-center m-auto text-black">
        Already registered?{" "}
        <Link href={`/${data.tenant.slug}/login`}>
          <span
            className="font-semibold text-black"
            style={{ color: data.tenant.mainColor }}
          >
            Login here
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

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
