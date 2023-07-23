import classNames from "classnames";
import Link from "next/link";

type propLogo = {
  size: "small" | "medium";
  className?: string;
  admin?: boolean;
};
export const Logo = ({ size, className, admin }: propLogo) => {
  return (
    <Link className={classNames(className)} href="/">
      <div className={classNames("flex lg:flex-col h-full ")}>
        <div className={classNames(" flex items-center    lg:m-0 lg:gap-2")}>
          <svg
            viewBox="0 0 27 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              " mr-[10px] hover:animate-spin duration-75 transition-all",
              size === "small"
                ? " w-[1.538rem] h-[1.538rem] lg:w-[1.875rem] lg:h-[1.875rem]"
                : " h-[2.707rem] w-[2.707rem] lg:h-[2.969rem] lg:w-[3.089rem]"
            )}
          >
            <path
              d="M13.5391 0.744385L26.5294 8.24438V23.2444L13.5391 30.7444L0.548681 23.2444V8.24438L13.5391 0.744385Z"
              className=" fill-cake-100"
            />
          </svg>
          <h1
            className={classNames(
              " font-roboto text-light-100 font-bold  whitespace-nowrap",
              size === "small"
                ? " text-[1.323rem]  lg:text-lg"
                : "  text-[2.328rem]  leading-[2.728rem] lg:text-2xl"
            )}
          >
            food explorer
          </h1>
        </div>
        {admin && (
          <span className=" text-cake-200 leading-[1.2rem] text-end w-full">
            admin
          </span>
        )}
      </div>
    </Link>
  );
};
