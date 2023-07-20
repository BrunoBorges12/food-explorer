import classNames from "classnames";
import { BsSearch } from "react-icons/bs";

export const Search = ({ hiddenIsMobile }) => {
  return (
    <div
      className={classNames(
        "w-full    text-light-100      bg-dark-900 h-10 relative rounded-md lg:ml-11 lg:mr-8 ",
        hiddenIsMobile ? "hidden lg:flex" : "flex"
      )}
    >
      <div className=" gap-[14px]  pl-20  flex items-center">
        <BsSearch className="h-5 w-5" />
        <input
          className="leading-3  bg-transparent w-[344px] hover:border-none focus-visible:outline-none"
          type="text"
          placeholder="Busque por pratos  ou ingredientes"
        />
      </div>
    </div>
  );
};
