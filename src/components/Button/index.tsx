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
        "py-3 px-8 hover:opacity-50  cursor-pointer flex items-center justify-center text-light-100 gap-3 shadow-inner transition-all duration-500 text-center select-none  relative font-poppins  font-medium text-sm rounded-md",
        {
          "bg-tomato-100": color === "tomato-100",
          "bg-tomato-200": color === "tomato-200",
          "bg-tomato-400": color === "tomato-400",
        },
        className
      )}
    >
      {checkout && <CheckoutIcon />}
      <span className={classNames("  whitespace-nowrap text-sm font-poppins")}>
        {!loading && title}
      </span>
      {loading && (
        <>
          Entrando
          <div className="    w-5 h-5  animate-spin  rounded-[50%] border "></div>
        </>
      )}
      {checkout && <span>{`(${numberCart})`}</span>}
    </button>
  );
}

export default Button;
