import classNames from "classnames";

type propLogo = {
  size: "small" | "medium";
};
export const Logo = ({ size }: propLogo) => {
  return (
    <div className=" flex items-center gap-3">
      <svg
        viewBox="0 0 27 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames({
          "w-[3.089rem] h-[2.969rem]": size === "medium",
          " w-8  h-8": size === "small",
        })}
      >
        <path
          d="M13.5391 0.744385L26.5294 8.24438V23.2444L13.5391 30.7444L0.548681 23.2444V8.24438L13.5391 0.744385Z"
          fill="#4D585E"
        />
      </svg>

      <h1
        className={classNames(
          " font-roboto font-bold  text-light-100",
          size === "small" ? "text-lg " : "text-2xl"
        )}
      >
        food explorer
      </h1>
    </div>
  );
};
