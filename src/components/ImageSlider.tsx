"use client";

import Image, { type StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Props = {
  images: StaticImageData[];
};

function ImageSlider({ images }: Props) {
  return (
    <Swiper
      loop
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images.map(img => (
        <SwiperSlide key={img.src}>
          <Image
            src={img}
            alt="Travel image"
            className="aspect-video w-full shrink-0 object-cover min-h-[420px] max-h-[clamp(520px,85vh,650px)]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
