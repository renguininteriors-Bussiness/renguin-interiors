"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#050505] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500">

            Gallery

          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold">

            Our Luxury Projects

          </h2>

        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {images.map((img) => (

            <SwiperSlide key={img}>

              <div className="overflow-hidden rounded-[30px]">

                <img
                  src={img}
                  className="
                  h-[450px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-110
                  "
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}