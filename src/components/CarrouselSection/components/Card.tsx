/* eslint-disable @next/next/no-img-element */

import Button from "@/components/Button";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
export const Card = () => {
  return (
    <div className="relative">
      <div className="  font-roboto  relative    h-[500px] rounded-xl w-[20rem] isolate border border-dark-400 bg-dark-300">
        <AiOutlineHeart className=" text-light-300  absolute  right-3 top-3 cursor-pointer w-8  h-8 " />
        <div className=" py-14  flex  flex-col justify-center items-center px-10">
          {" "}
          <img
            className=" h-48 w-48 rounded-[50%] object-cover"
            src="./salada.png"
            alt="tese"
          />
          <span className=" font-poppins my-4  text-light-300 text-lg  mt-5 font-bold">
            Spaguetti Gambe
          </span>
          <span className=" text-light-400    text-sm">
            Massa fresca com camarões e pesto.
          </span>
          <span className="text-cake-200 text-xl mt-4">R$ 79,97</span>
          <div className=" flex   gap-4 mt-4">
            <button className=" text-light-100 mt-4 flex items-center">
              <span className="  font-semibold text-lg">
                <AiOutlineMinus />
              </span>
              <span className="    text-lg mx-2">01</span>
              <span>
                <AiOutlinePlus className="  font-semibold text-lg" />
              </span>
            </button>
            <Button color="tomato-100" size="small" title="incluir" />
          </div>
        </div>
      </div>
    </div>
  );
};
