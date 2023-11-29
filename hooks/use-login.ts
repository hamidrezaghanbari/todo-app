import { login } from "@/service/requests";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { useProfileStore } from ".";
import { useRouter } from "next/router";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setProfile = useProfileStore((state) => state.setProfile);
  const router = useRouter();

  const {
    mutate: loginRequest,
    isPending,
    data,
  } = useMutation({
    mutationFn: login,
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    loginRequest(
      { email, password },
      {
        onSuccess: (response) => {
          if (response.token) {
            sessionStorage.setItem("user_id", response?.id?.toString());
            sessionStorage.setItem("token", response?.token?.toString());

            setProfile({ id: response?.id?.toString(), name: response?.name });
            router.push("/");
          }
        },
      }
    );
  };

  return {
    emailState: { value: email, setState: setEmail },
    passwordState: { value: password, setState: setPassword },
    handleLogin,
    isPending,
    error: data?.message ?? "",
  };
};
