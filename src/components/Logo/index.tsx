import classNames from "classnames";

type propLogo = {
  size: "small" | "medium";
  className?: string;
  admin?: boolean;
};
export const Logo = ({ size, className, admin }: propLogo) => {
  return (
    <div className="flex flex-col  justify-center">
      <div
        className={classNames(
          className,
          " flex items-center   gap-3  lg:m-0 lg:gap-2"
        )}
      >
        <svg
          viewBox="0 0 27 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames({
            " w-[43.31px] h-[43.31px] lg:h-[2.969rem] lg:w-[3.089rem]   ":
              size === "medium",
            " w-7 h-7": size === "small",
          })}
        >
          <path
            d="M13.5391 0.744385L26.5294 8.24438V23.2444L13.5391 30.7444L0.548681 23.2444V8.24438L13.5391 0.744385Z"
            fill="#4D585E"
          />
        </svg>

        <h1
          className={classNames(
            " font-roboto font-bold  text-light-100 whitespace-nowrap ",
            size === "small"
              ? "  text-base1 lg:text-lg  "
              : " text-xl lg:text-2xl"
          )}
        >
          food explorer
        </h1>
        {admin && (
          <span className=" capitalize  -tracking-tight text-cake-200   text-right font-roboto text-sm  mt-0 relative flex-shrink flex-grow  lg:hidden">
            admin
          </span>
        )}
      </div>
      {admin && (
        <span className=" capitalize  -tracking-tight text-cake-200   text-right font-roboto text-xs  mt-0 relative hidden lg:block">
          admin
        </span>
      )}
    </div>
  );
};
