import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Card } from "./components/Card";

type propsCarrousel = {
  title: string;
};
export const CarrouselSection = ({ title }: propsCarrousel) => {
  return (
    <div>
      <h1 className="mb-8 text-light-300 text-xl font-poppins">{title}</h1>
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
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
