"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./materials.css";

import { Carousel } from "react-bootstrap";
import CarouselCard from "./carouselCard/carouselCard";

import Title from "@/app/menu/title/title";

export default function Materials() {
  return (
    <div className="materials">
      <Title titleText={"Materials"} />
      <Carousel>
        <Carousel.Item>
          <CarouselCard />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Example card 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselCard />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Example card 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselCard />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Example card 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
