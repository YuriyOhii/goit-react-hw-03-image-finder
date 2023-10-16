import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';
export const Modal = ({ bigImage, tag, onClick }) => {
  const handleClick = e => {
    if (e.target === e.currentTarget) onClick();
  };
  return (
    <Overlay onClick={handleClick}>
      <ModalW>
        <img src={bigImage} alt={tag} />
      </ModalW>
    </Overlay>
  );
};

Modal.propTypes = {
  bigImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
