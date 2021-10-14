import React from "react";
import { Carousel } from "react-bootstrap";
import animal from "./photos/animal.jpg";
import house from "./photos/house.jpg";
import woman from "./photos/woman.jpg";
import "./carousel.css";

const Nav = () => (
  <>
    <div className="ramka">
      <Carousel interval="1000">
        <Carousel.Item>
          <img className="d-block w-100" src={animal} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={house} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={woman} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </>
);

export default Nav;
