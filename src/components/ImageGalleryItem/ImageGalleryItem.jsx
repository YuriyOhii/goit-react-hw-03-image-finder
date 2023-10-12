import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends PureComponent {
  state = {};
  render() {
    const { image:{webformatURL, largeImageURL, tags } } = this.props
    return (
      <>
        <Image src={webformatURL} alt={tags} />
        {false && <Modal bigImage={largeImageURL} tag={tags}/>}
      </>
    );
  }
}
