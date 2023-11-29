import { Banner, Button, Input } from "@/components";
import { useLogin } from "@/hooks";
import Head from "next/head";

const Login = () => {
  const { handleLogin, emailState, passwordState, isPending, error } =
    useLogin();

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

            <form onSubmit={handleLogin} className="w-full flex flex-col gap-2">
              <Input
                label="Email"
                name="email"
                placeholder="Email: abc@mail.com"
                stateHandler={emailState}
              />

              <Input
                label="Password"
                name="password"
                placeholder="Password: 123456789"
                type="password"
                stateHandler={passwordState}
              />

              <Button
                className="w-full mt-5 "
                type="submit"
                disabled={isPending}
              >
                Login {isPending ? " . . ." : ""}
              </Button>
            </form>

            <span className="text-red-500 overflow-hidden w-full h-6">
              {error ? `Error ${error}` : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
