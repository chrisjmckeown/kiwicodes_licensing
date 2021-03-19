import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({
  selectedOption,
  handleClearSelectedOption,
  title,
  message,
}) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClearSelectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    className='modal'
    ariaHideApp={false}
  >
    <h3 className='modal__title'>{title}</h3>
    <p className='modal__body'>{message}</p>
    <button className='button__large' onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
