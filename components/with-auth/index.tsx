import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

const WithAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.replace("/login");
    }
  }, []);

  return <>{children}</>;
};

export default WithAuth;
