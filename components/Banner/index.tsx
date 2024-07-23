import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const Banner = () => {
  return (
    <div className="m-6">
      <Swiper slidesPerView={1}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};
