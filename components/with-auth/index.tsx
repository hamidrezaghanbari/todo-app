import { useRouter } from "next/router";
import { useEffect, ReactNode, useState } from "react";

const WithAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.replace("/login");
    }

    setIsLoaded(true);
  }, []);

  return <>{isLoaded ? children: <div className="w-screen h-screen flex items-center justify-center animate-pulse">isLoading...</div>}</>;
};

export default WithAuth;
