import { BsSearch } from "react-icons/bs";
type propsSearch = {
  className?: string;
};
export const Search = ({ className }: propsSearch) => {
  return (
    <div
      className={
        " self-center bg-dark-900 rounded-md py-3 px-4   w-full   " + className
      }
    >
      <label className="flex  gap-4 ml-4 w-full">
        <BsSearch className="w-6 h-6 text-light-400 " />
        <input
          className=" focus-within:outline-none placeholder:text-light-500  bg-transparent   text-light-300 "
          placeholder="Busque por pratos ou  ingredientes"
          type="text"
        />
      </label>
    </div>
  );
};
