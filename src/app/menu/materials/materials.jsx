"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./materials.css";

import { Carousel, CarouselItem } from "react-bootstrap";
import CarouselCard from "./carouselCard/carouselCard";

export default function Materials({ materials }) {
  return (
    <div className="materials">
      <Carousel>
        {materials.map((material) => (
          <Carousel.Item key={material.key}>
            <CarouselCard material={material} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
