import React, { ReactElement } from "react";
import TabsCarItem from "../TabsCarItem/TabsCarItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "./ScrollCarList.css";

interface ScrollCarListProps {
  cars: any;
}

const ScrollCarList: React.FC<ScrollCarListProps> = ({
  cars,
}): ReactElement => {
  return (
    <div className="scrollCarList-container  ">
      <Splide
        options={{
          type: "slide",
          perPage: 3,
          perMove: 1,
          pagination: false,
          padding: 0,

          direction: "ttb",
          height: "20rem",
          focus: "center",
          autoHeight: true,
          classes: {
            arrows:
              "splide__arrows absolute top-0 left-2 flex-row transform -translate-y-1/2",
            arrow: "splide__arrow bg-gray-500 p-2 rounded-full border ",
            prev: "splide__arrow--prev left-2",
            next: "splide__arrow--next right-2",
          },
        }}
      >
        {cars.map((car, index) => (
          <SplideSlide key={index}>
            <TabsCarItem
              carImage={car.carImage}
              carType={car.carType}
              carPriceRange={car.carPriceRange}
              isSold={car.isSold}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ScrollCarList;
