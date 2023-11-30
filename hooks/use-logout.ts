import { logout } from "@/service/requests";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useProfileStore } from ".";

export const useLogout = () => {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore((state) => state);

  const { mutate: logoutRequest } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setProfile(null);
      sessionStorage.removeItem("user_id");
      sessionStorage.removeItem("token");

      router.replace("/login");
    },
  });

  const handleLogout = () => {
    logoutRequest();
  };

  return { handleLogout, profile };
};
