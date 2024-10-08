import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Banner = () => {
  return (
    <div className="m-6">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide className="text-center text-lg bg-white !flex justify-center items-center">
          <Image
            className="block w-max object-cover"
            src="/tmp/banner1.png"
            alt=""
            width={700}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white !flex justify-center items-center">
          <Image
            className="block w-max object-cover"
            src="/tmp/banner2.png"
            alt=""
            width={700}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
