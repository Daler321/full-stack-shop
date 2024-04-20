import React, { useState, FC, useEffect } from 'react';

import {
  ItemImgContainer,
  ItemImg,
  ImgSelectedContainer,
  ImgSelector,
  ItemImgConstrolContainer,
  ItemImgControlBtn,
} from './image-slide.styles';

interface IImageSlideProps {
  images: string[];
}

const ImageSlide: FC<IImageSlideProps> = ({ images }) => {
  const [imageSelected, setImageSelected] = useState(images[0]);

  useEffect(() => setImageSelected(images[0]), [images]);

  const slidePage = (action: string) => {
    switch (action) {
      case 'next':
        if (imageSelected === images[images.length - 1]) return;
        setImageSelected(images[images.indexOf(imageSelected) + 1] || '');
        return;
      case 'prev':
        if (imageSelected === images[0]) return;
        setImageSelected(images[images.indexOf(imageSelected) - 1] || '');
        return;
    }
  };

  return (
    <ItemImgContainer>
      <ItemImgConstrolContainer>
        <ItemImgControlBtn onClick={() => slidePage('prev')} $left={true}>
          {'<'}
        </ItemImgControlBtn>
        <ItemImg src={imageSelected} />
        <ItemImgControlBtn onClick={() => slidePage('next')} $left={false}>
          {'>'}
        </ItemImgControlBtn>
      </ItemImgConstrolContainer>
      <ImgSelectedContainer>
        {images.map((url) => (
          <ImgSelector key={url} $selected={imageSelected === url} />
        ))}
      </ImgSelectedContainer>
    </ItemImgContainer>
  );
};

export default ImageSlide;
