/* eslint-disable @next/next/no-img-element */
import { CardPayment } from "@/components/CardPayment";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { useCart } from "@/context/Cart";
function getTotal(total: number, item: { price: number; quantity: number }) {
  return total + item.price * item.quantity;
}
export default function Pedidos() {
  const { cart, removeFromCart } = useCart();
  const total = cart.data.reduce(getTotal, 0);
  return (
    <>
      <NavBar />
      <Container className="py-32 font-poppins ">
        <div className="flex lg:flex-row flex-col gap-32 text-light-300">
          <div className="   lg:w-[444px]">
            <h1 className="  text-xl  text-light-300 mb-8">Meu Pedido</h1>
            <div className="flex flex-col  h-[300px] w-full  overflow-scroll  text-light-100">
              {cart.data.map((cartObject, idx) => {
                return (
                  <div
                    key={idx}
                    className=" flex py-4 flex-wrap gap-4 items-center text-light-100"
                  >
                    <img
                      className="w-[90px] h-[90px] opacity-80 flex-shrink-0"
                      src={`http://127.0.0.1:5000/uploaded_images/${cartObject.img}`}
                      alt={cartObject.name}
                    />
                    <div className="">
                      <span className=" text-base1  mb-11  text-light-300 ">
                        {cartObject.quantity} X {cartObject.name}
                      </span>
                      <span className=" font-roboto text-xs ml-3  relative  text-light-400">
                        {" "}
                        R${" "}
                        {cartObject.price
                          .toString()
                          .replace(/([0-9]{2})$/g, ",$1")}
                      </span>
                      <button
                        onClick={() => removeFromCart(cartObject.id)}
                        className="  text-tomato-400 font-roboto text-sm  block"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="text-base1 font-medium font-poppins mt-8">
              Total:R$ {total.toString().replace(/([0-9]{2})$/g, ",$1")}
            </h1>
          </div>
          <CardPayment />
        </div>
      </Container>
      <Footer />
    </>
  );
}
