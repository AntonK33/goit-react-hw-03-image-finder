import React from 'react';

import {
  GalleryItem,
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGallery.Styled';
const ImageGallery = ({ articles }) => {
  return (
    <GalleryItem>
      {articles.map(({ id, largeImageURL }) => (
        <ImageGalleryItem key={id}>
          <ImageGalleryItemImage src={largeImageURL} alt="" />
        </ImageGalleryItem>
      ))}
    </GalleryItem>
  );
};

export default ImageGallery;
