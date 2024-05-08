"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./materials.css";

import { Carousel, CarouselItem } from "react-bootstrap";
import CarouselCard from "./carouselCard/carouselCard";

import Title from "@/app/menu/title/title";

export default function Materials({ materials }) {
  return (
    <div className="materials">
      <Title titleText={"Materials"} />
      <Carousel>
        {materials.map((material) => (
          <Carousel.Item key={material}>
            <CarouselCard material={material} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
