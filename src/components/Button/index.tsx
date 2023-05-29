import classNames from "classnames";

type propsButton = {
  title: string;
  size: "small" | "medium";
  color: "tomato-dark" | "tomato-ligth" | "dark";
  mobile?: boolean;
};
function Button({ title, size, color, mobile }: propsButton) {
  return (
    <button
      className={classNames(
        " py-3 flex items-center justify-center   relative  rounded-md hover:opacity-80 transition-all duration-500",
        {
          "bg-tomato-100": color === "tomato-dark",
          "bg-tomato-400": color === "tomato-ligth",
          "bg-dark-800": color === "dark",
        },
        {
          "px-6   lg:px-8": size === "small" && mobile,
          "px-6": size === "small",
          "px-8": size === "medium",
        }
      )}
    >
      <span className=" text-light-100 text-sm  font-poppins  hover:opacity-80 transition-all duration-500  font-medium">
        {title}
      </span>
    </button>
  );
}

export default Button;
