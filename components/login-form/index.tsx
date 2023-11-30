import React from "react";
import { Button, Input } from "..";
import { useLogin } from "@/hooks";

const LoginForm = () => {
  const { handleLogin, emailState, passwordState, isPending, error } =
    useLogin();

  return (
    <>
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

        <Button className="w-full mt-5 " type="submit" disabled={isPending}>
          Login {isPending ? " . . ." : ""}
        </Button>
      </form>

      <span className="text-red-500 overflow-hidden w-full h-6">
        {error ? `Error ${error}` : ""}
      </span>
    </>
  );
};

export default LoginForm;
