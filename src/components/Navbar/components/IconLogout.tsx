import classNames from "classnames";

export const IconLogout = () => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      className={classNames(
        " w-7 h-7 cursor-pointer  hover:opacity-50 transition-all lg:w-14 lg:h-14"
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2891 6.75L23.5391 12M23.5391 12L18.2891 17.25M23.5391 12H9.53906M9.53906 23H2.53906C2.27385 23 2.01949 22.8946 1.83196 22.7071C1.64442 22.5196 1.53906 22.2652 1.53906 22V2C1.53906 1.73478 1.64442 1.48043 1.83196 1.29289C2.01949 1.10536 2.27385 1 2.53906 1H9.53906"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
