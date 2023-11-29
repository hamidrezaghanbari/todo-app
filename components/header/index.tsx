import { LogoutIcon, PersonIcon } from "../icons";
import { useLogout } from "@/hooks";

const Header = () => {
  const { handleLogout, profile } = useLogout();

  return (
    <div className="lg:px-24 px-6 lg:pt-12 pt-8 w-full flex justify-between items-center">
      <button
        className="p-3 group inline-flex items-center gap-2 justify-center rounded-full hover:bg-primary-dark transition-colors duration-100"
        type="button"
        onClick={handleLogout}
      >
        <LogoutIcon />
        <span className="hidden px-2 group-hover:inline-block ">Logout</span>
      </button>

      <span className="p-3 inline-flex items-center gap-2 justify-center rounded-full hover:bg-primary-dark transition-colors duration-100">
        <PersonIcon />
        <span className=" px-2">{profile?.name}</span>
      </span>
    </div>
  );
};

export default Header;
