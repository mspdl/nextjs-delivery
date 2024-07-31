import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { InputField } from "@/components/InputField";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/Tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const handleSubmit = () => {};
  const handleSignUp = () => {};

  return (
    <div className="bg-white py-12 px-6 ">
      <Head>
        <title>Login | {data.tenant.name}</title>
      </Head>
      <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`} />

      <div className="font-semibold text-4xl mt-5 mb-10 text-center">
        {data.tenant.name}
      </div>

      <div className="font-normal text-lg text-[#1b1b1bcc] text-center m-auto w-[50%] pb-10 border-b-2 border-black">
        Use your credentials to login.
      </div>

      <div className="">
        <div className="">
          <InputField
            color={data.tenant.mainColor}
            placeholder="Type your e-mail"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className="">
          <InputField
            color={data.tenant.mainColor}
            placeholder="Type your password"
            value={password}
            onChange={setPassword}
            isPassword
          />
        </div>

        <div className="">
          <Button
            color={data.tenant.mainColor}
            label="Login"
            onClick={handleSubmit}
            isFilled
          />
        </div>
      </div>
      <div className="">Forgot your password? Click here</div>
      <div className="">
        <Button
          color={data.tenant.mainColor}
          label="Sign Up"
          onClick={handleSignUp}
        />
      </div>
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
