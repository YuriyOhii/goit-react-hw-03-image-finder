import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';
export const Modal = ({bigImage, tag}) => {
  return (
    <Overlay class="overlay">
      <ModalW class="modal">
        <img src={bigImage} alt={tag} />
      </ModalW>
    </Overlay>
  );
};

Modal.propTypes = {};
