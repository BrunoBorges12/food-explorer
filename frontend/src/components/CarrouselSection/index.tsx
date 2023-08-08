import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Card } from "./components/Card";
import { products } from "@/types/products";


export const CarrouselSection = ({ title, type, products }: products) => {
  return (
    <div>
      <h1 className="my-8 text-light-300 text-xl font-poppins">{title}</h1>
      <Swiper
        grabCursor={false}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          "1000": {
            slidesPerView: 4,
            spaceBetween: 200,
          },
          "350": {
            slidesPerView: 1,
          },
        }}
      >
         { products.length > 1 &&  products.map((product, key) => {
          if (type === product.category) {
            return (
              <SwiperSlide key={key}>
                <Card
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                  quantity={1}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};
