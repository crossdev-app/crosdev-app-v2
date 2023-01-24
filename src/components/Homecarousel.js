import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homecarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='img-carousel-box'>
          <img
            className='img-carousel'
            src='./carousel_img/landing_page.png'
            alt='First slide'
            height='280'
          />
        </div>
        <Carousel.Caption>
          <h3>Landing Page</h3>
          <p>
            Single page webiste that show up your product.{" "}
            <Link
              to={"/product/landing-page"}
              className='c-link'>
              Explore
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='img-carousel-box'>
          <img
            className='img-carousel'
            src='./carousel_img/website_company.png'
            alt='Second slide'
            height='300'
          />
        </div>

        <Carousel.Caption>
          <h3>Company Profile Website</h3>
          <p>A website to intruduce your company. Explore</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='img-carousel-box'>
          <img
            className='img-carousel'
            src='./carousel_img/erp_module.png'
            alt='Third slide'
            height='300'
          />
        </div>

        <Carousel.Caption>
          <h3>ERP Module</h3>
          <p>
            Enterprise Resource Planing module to boost your company
            productivity. Explore
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Homecarousel;
