import { Banner, LoginForm } from "@/components";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Todo App ⚒️</title>
      </Head>
      <div className="w-screen h-screen flex flex-col text-white bg-primary">
        <div className="flex justify-start lg:justify-center lg:items-start items-center gap-12 lg:gap-24 pt-0 px-4 lg:px-0 w-full lg:pt-36 flex-col lg:flex-row">
          <Banner />

          <div className="w-96 justify-between lg:h-96 h-3/4 flex flex-col gap-4 bg-primary-dark rounded-2xl pt-4 pb-6 px-6 shadow-lg">
            <h1 className="font-bold text-lg">Login</h1>

            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
