import classNames from "classnames";
import { IconLogout } from "./IconLogout";
import { Search } from "./Search";
type propsOpen = {
  isOpen: boolean;
};
export const SideBar = ({ isOpen }: propsOpen) => {
  return (
    <div
      className={classNames(
        " fixed w-full h-full z-[999999] transition-all   duration-700 bg-dark-400 lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className=" flex flex-col justify-center gap-9 px-10 py-10">
        <Search />
        <span className="text-light-100  text-lg font-poppins">Sair</span>
      </div>
    </div>
  );
};
