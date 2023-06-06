import classNames from "classnames";
type propsButton = {
  title: string;
  size: "small" | "medium";
  color: "tomato-dark" | "tomato-ligth" | "dark";
  mobile?: boolean;
  loading: boolean;
  widthFull?: boolean;
  checkout?: boolean;
  className?: string;
};
function Button({
  title,
  size,
  color,
  mobile,
  loading,
  widthFull,
  checkout,
  className,
}: propsButton) {
  return (
    <button
      className={classNames(
        " py-3  flex items-center justify-center    relative  rounded-[5px] hover:opacity-80 transition-all duration-500",
        {
          "bg-tomato-100": color === "tomato-dark",
          "bg-tomato-400": color === "tomato-ligth",
          "bg-dark-800": color === "dark",
        },
        {
          "px-6   lg:px-8": size === "small" && mobile,
          "px-6": size === "small",
          "px-8": size === "medium",
        },
        widthFull ? "w-full  " : "",
        className
      )}
    >
      {checkout ? (
        <svg
          width="25"
          height="25"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.53906 14C8.53906 13.4477 8.98678 13 9.53906 13H22.5391C23.0913 13 23.5391 13.4477 23.5391 14C23.5391 14.5523 23.0913 15 22.5391 15H9.53906C8.98678 15 8.53906 14.5523 8.53906 14Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.53906 18C8.53906 17.4477 8.98678 17 9.53906 17H22.5391C23.0913 17 23.5391 17.4477 23.5391 18C23.5391 18.5523 23.0913 19 22.5391 19H9.53906C8.98678 19 8.53906 18.5523 8.53906 18Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.62485 6.58579C3.99992 6.21071 4.50863 6 5.03906 6H27.0391C27.5695 6 28.0782 6.21071 28.4533 6.58579C28.8284 6.96086 29.0391 7.46957 29.0391 8V27C29.0391 27.3466 28.8596 27.6684 28.5648 27.8507C28.27 28.0329 27.9018 28.0494 27.5918 27.8944L24.0391 26.118L20.4863 27.8944C20.2047 28.0352 19.8734 28.0352 19.5919 27.8944L16.0391 26.118L12.4863 27.8944C12.2047 28.0352 11.8734 28.0352 11.5918 27.8944L8.03906 26.118L4.48628 27.8944C4.17629 28.0494 3.80815 28.0329 3.51333 27.8507C3.21851 27.6684 3.03906 27.3466 3.03906 27V8C3.03906 7.46957 3.24978 6.96086 3.62485 6.58579ZM27.0391 8L5.03906 8L5.03906 25.382L7.59185 24.1056C7.87338 23.9648 8.20475 23.9648 8.48628 24.1056L12.0391 25.882L15.5918 24.1056C15.8734 23.9648 16.2047 23.9648 16.4863 24.1056L20.0391 25.882L23.5918 24.1056C23.8734 23.9648 24.2047 23.9648 24.4863 24.1056L27.0391 25.382V8Z"
            fill="white"
          />
        </svg>
      ) : (
        ""
      )}

      {loading ? (
        <>
          <span className=" mr-3 capitalize text-light-100 text-sm  font-poppins  hover:opacity-80 font-medium">
            Entrando...
          </span>
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-6 h-6 mr-3 text-light-400 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        </>
      ) : (
        <>
          <span className=" mx-1 capitalize text-light-100 text-sm  font-poppins  hover:opacity-80 font-medium">
            {title}
          </span>
          <span className="text-light-100 ml">{checkout ? "(0)" : ""}</span>
        </>
      )}
    </button>
  );
}

export default Button;
