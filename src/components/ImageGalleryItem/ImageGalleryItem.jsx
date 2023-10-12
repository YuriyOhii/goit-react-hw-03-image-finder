import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends PureComponent {
  state = {};
  render() {
    return (
      <>
        <Image src="" alt="" />
        {false && <Modal />}
      </>
    );
  }
}
