import classNames from "classnames";
import { CheckoutIcon } from "./components/CheckoutIcon";
type propsButton = {
  title: string;
  size: "small" | "medium";
  color: "tomato-100" | "tomato-200" | "tomato-400";
  loading?: boolean;
  className?: string;
  checkout?: boolean;
  numberCart?: number;
};
function Button({
  color,
  title,
  className,
  loading,
  checkout,
  numberCart,
}: propsButton) {
  return (
    <button
      className={classNames(
        "hover:opacity-50  cursor-pointer flex items-center justify-center text-light-100 gap-3 shadow-inner transition-all duration-500 text-center select-none  relative font-poppins  font-medium text-sm rounded-md",
        {
          "bg-tomato-100": !checkout && color === "tomato-100",
          "bg-tomato-200": !checkout && color === "tomato-200",
          "bg-tomato-400": !checkout && color === "tomato-400",
          "bg-transparent lg:bg-tomato-100": checkout,
        },
        !checkout ? "py-3 px-8 " : "lg:py-3 lg:px-8",
        className
      )}
    >
      {checkout && <CheckoutIcon />}
      <div
        className={classNames(
          " flex items-center justify-center gap-3",
          checkout ? " hidden lg:block" : ""
        )}
      >
        <span
          className={classNames("  whitespace-nowrap text-sm font-poppins")}
        >
          {!loading && title}
        </span>
        {loading && (
          <>
            Entrando
            <div className="    w-5 h-5  animate-spin  rounded-[50%] border "></div>
          </>
        )}
        {checkout && <span>{`(${numberCart})`}</span>}
      </div>
    </button>
  );
}

export default Button;
