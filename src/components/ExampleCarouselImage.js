import React, { useState } from 'react';

const ExampleCarouselImage = ({ src }) => {
  return (
    <img src={src} alt="carousel" className="d-block w-100" />
  );
};

export default ExampleCarouselImage;
