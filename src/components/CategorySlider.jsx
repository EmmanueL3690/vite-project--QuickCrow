import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../styles/CategorySlider.css";

const cards = [
  { title: "Pizza", image: "\image 23.png" },
  { title: "Shawarma", image: "\image 22.png" },
  { title: "Pasta", image: "\image 21.png" },
  { title: "Bread Burger", image: "\image 8.png" },
  { title: "Chips", image: "\image 4.png" },
  { title: "Donut", image: "\donut_6 1.png" },
];

export default function CategorySlider() {
  const swiperRef = useRef(null);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      if (isForward) {
        if (swiper.realIndex < cards.length - 1) {
          swiper.slideNext();
        } else {
          setIsForward(false);
          swiper.slidePrev();
        }
      } else {
        if (swiper.realIndex > 0) {
          swiper.slidePrev();
        } else {
          setIsForward(true);
          swiper.slideNext();
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isForward]);

  return (
    <div className="Categories-container">
      <h1 className="cat">Categories</h1>
      <div className="card-slider-wrapper">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="simple-card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

