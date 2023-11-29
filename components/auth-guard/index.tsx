import { useRouter } from "next/router";
import { useEffect, ReactNode, useState } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState("INITIATION");
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setStatus("AUTHENTICATED");
    } else {
      setStatus("NOT_AUTHENTICATED");
    }
  }, []);

  if (status === "INITIATION") {
    <span>loading</span>;
  }

  if (status === "NOT_AUTHENTICATED") {
    router.replace("/login");
  }

  return children;
};

export default AuthGuard;
