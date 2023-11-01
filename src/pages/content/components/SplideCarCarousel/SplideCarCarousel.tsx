import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "./SplideCarCarousel.css";
import CarItemDisplay from "../CarItemDisplay/CarItemDisplay";

interface SplideCarCarouselProps {
  data: any;
}

const SplideCarCarousel: React.FC<SplideCarCarouselProps> = ({ data }) => {
  return (
    <div className="splideCarCarouse-container">
      <Splide
        options={{
          type: "slide",
          perPage: 3,
          perMove: 1,
          loop: true,
          rewind: false,
          // rewindSpeed: 1000,
          pagination: false,
          padding: 0,
          classes: {
            arrows: "splide__arrows splideCarCarousel-vectors-div",
            arrow: "splide__arrow splideCarCarousel-onevector-div",
            prev: "splide__arrow--prev splideCarCarousel-vector",
            next: "splide__arrow--next splideCarCarousel-vector",
          },
        }}
      >
        {data.map((car, index) => (
          <SplideSlide key={index}>
            <CarItemDisplay
              carType={car.carType}
              priceRange={car.priceRange}
              carImage={car.carImage}
              isSold={car.isSold}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SplideCarCarousel;
