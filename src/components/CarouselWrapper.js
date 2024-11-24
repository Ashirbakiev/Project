import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const BlogCard = styled.div`
  padding: 20px;
  background-color: #ddd;
  border-radius: 10px;
  height: 400px;
`;

const CarouselWrapper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <BlogGrid>
        <BlogCard />

      </BlogGrid>
      <BlogGrid>
        <BlogCard />

      </BlogGrid>
      <BlogGrid>
        <BlogCard />

      </BlogGrid>
    </Slider>
  );
};

export default CarouselWrapper;
