/* eslint-disable @next/next/no-img-element */

import { useCart } from "@/context/Cart";
import { Button } from "antd";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
type PropsCard = {
  name: string;
  price: number;
  description?: string;
  img: string;
  id: string;
  quantity: number;
};
export const Card = (props: PropsCard) => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState(props);
  return (
    <div className="relative">
      <div className="  font-roboto  relative    h-[520px] rounded-xl w-[20rem] isolate border border-dark-400 bg-dark-300">
        <AiOutlineHeart className=" text-light-300  absolute  right-3 top-3 cursor-pointer w-8  h-8 " />
        <div className=" py-14  flex  flex-col justify-center items-center px-10">
          {" "}
          <img
            className=" h-48 w-48 rounded-[50%] object-cover"
            src={`http://127.0.0.1:5000/uploaded_images/${props.img}`}
            alt={product.name}
          />
          <span className=" font-poppins my-4  text-light-300 text-lg  mt-5 font-bold">
            {product.name}
          </span>
          <span className=" text-light-400   max-w-[14rem]  text-sm">
            {product.description}
          </span>
          <span className="text-cake-200 text-xl mt-4">
            {product.price.toString().replace(/([0-9]{2})$/g, ",$1")}
          </span>
          <div className=" flex  items-center   gap-4 mt-4">
            <button className=" text-light-100 flex items-center">
              <span className="  font-semibold text-lg">
                <AiOutlineMinus
                  onClick={() =>
                    setProduct({
                      ...product,
                      quantity:
                        product.quantity === 1 ? 1 : product.quantity - 1,
                    })
                  }
                />
              </span>
              <span className="    text-lg mx-2">{product.quantity}</span>
              <span>
                <AiOutlinePlus
                  className="  font-semibold text-lg"
                  onClick={() =>
                    setProduct({
                      ...product,
                      quantity: product.quantity + 1,
                    })
                  }
                />
              </span>
            </button>
            <Button
              className=" bg-tomato-100 hover:opacity-50  cursor-pointer flex items-center justify-center text-light-100 gap-3 shadow-inner transition-all duration-500 text-center select-none  relative font-poppins py-3 px-8  font-medium text-sm rounded-md"
              size="large"
              onClick={() => {
                addToCart(product);
              }}
            >
              Incluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
