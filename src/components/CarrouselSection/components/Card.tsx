/* eslint-disable @next/next/no-img-element */
export const Card = () => {
  return (
    <div className="relative">
      <div className="  font-roboto    h-[462px] rounded-xl w-[20rem] isolate border border-dark-400 bg-dark-1000">
        <div className=" py-14  flex  flex-col justify-center items-center px-10">
          {" "}
          <img
            className=" h-48 w-48 rounded-[50%] object-cover"
            src="./salada.png"
            alt="tese"
          />
          <span className=" font-poppins my-4  text-light-300 text-lg  mt-5 font-bold">
            Spaguetti Gambe{" "}
          </span>
          <span className=" text-light-400    text-sm">
            Massa fresca com camarões e pesto.{" "}
          </span>
          <span className="text-cake-200 text-xl mt-4">R$ 79,97</span>
        </div>
      </div>
    </div>
  );
};
