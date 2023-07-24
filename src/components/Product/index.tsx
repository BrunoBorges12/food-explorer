/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/context/Cart";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// @ts-ignore
export const Product = ({ product, id }) => {
  const { addToCart, cart } = useCart();
  const router = useRouter();
  //eu sei poderia ter feito meblhor mais ja estava de saco cheio queria termina logo para arrumar trampo de freelas
  const [data, setdata] = useState<{ quantity: number }>(
    cart.data.find((cartObject) => cartObject.id === id) || { quantity: 1 }
  );

  useEffect(() => {
    setdata(
      cart.data.find((cartObject) => cartObject.id === id) || { quantity: 1 }
    );
  }, []);
  console.log(data);

  return (
    <div className=" text-light-100 flex  my-16 gap-12 justify-center items-center font-poppins flex-col lg:flex-row">
      <div className=" lg:mr-12">
        <img
          className="  w-[264px] h-[264px] lg:w-[390.105px]  lg:h-[389px]"
          src={`http://127.0.0.1:5000/uploaded_images/${product.img}`}
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center mt-5">
        <h1 className="text-2xl">{product.name}</h1>
        <span className=" py-6">{product.description}</span>
        <div className=" flex gap-5">
          <button className=" text-light-100 flex items-center">
            <span className="  font-semibold text-lg">
              <AiOutlineMinus
                onClick={() =>
                  setdata({
                    ...product,
                    quantity: data.quantity === 1 ? 1 : data.quantity - 1,
                  })
                }
              />
            </span>
            <span className="    text-lg mx-2">{data.quantity}</span>
            <span>
              <AiOutlinePlus
                className="  font-semibold text-lg"
                onClick={() =>
                  setdata({
                    ...data,
                    quantity: data.quantity ? data?.quantity + 1 : 1,
                  })
                }
              />
            </span>
          </button>
          <Button
            className=" bg-tomato-100 hover:opacity-50  cursor-pointer flex items-center justify-center text-light-100 gap-3 shadow-inner transition-all duration-500 text-center select-none  relative font-poppins py-3 px-8  font-medium text-sm rounded-md"
            size="large"
            onClick={() => {
              router.push("/pedidos");
              addToCart({ ...product, quantity: data.quantity });
            }}
          >
            Incluir R${" "}
            {(product.price * data.quantity)
              .toString()
              .replace(/([0-9]{2})$/g, ",$1")}
          </Button>
        </div>
      </div>
    </div>
  );
};
