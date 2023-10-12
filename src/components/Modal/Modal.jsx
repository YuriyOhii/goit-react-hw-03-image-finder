import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';
export const Modal = props => {
  return (
    <Overlay class="overlay">
      <ModalW class="modal">
        <img src="" alt="" />
      </ModalW>
    </Overlay>
  );
};

Modal.propTypes = {};
