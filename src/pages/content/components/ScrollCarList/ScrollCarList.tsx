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
    <div className="scrollCarList-container ">
      <Splide
        options={{
          type: "slide",
          perPage: 3,
          perMove: 1,
          pagination: false,
          padding: 0,
          loop: true,
          direction: "ttb",
          rewind: false,
          height: "250px",
          // focus: "center",
          //autoHeight: true,
          classes: {
            arrows:
              "splide__arrows scrollCarList-arrows-div flex-row absolute top-0 right-20",
            arrow: "splide__arrow scrollCarList-arrow",
            prev: "splide__arrow--prev scrollCarList-arrow-left",
            next: "splide__arrow--next scrollCarList-arrow-right",
          },
        }}
      >
        {cars.map((car, index) => (
          <SplideSlide key={index}>
            <TabsCarItem
              carImage={car.carImage}
              carType={car.carType}
              carPriceRange={car.priceRange}
              isSold={car.isSold}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ScrollCarList;
