import React from 'react';
import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

const gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
export const ImageGallery = props => {
  return (
    <Gallery>
      {gallery.map(el => (
        <GalleryItem key={el.id}>
          <ImageGalleryItem image={el} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {};
