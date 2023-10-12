import React from 'react';
import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({images}) => {
  return (
    <Gallery>
      {images.map(el => (
        <GalleryItem key={el.id}>
          <ImageGalleryItem image={el} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {};
