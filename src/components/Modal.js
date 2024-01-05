import React from 'react';
import * as style from '../styles/modalStyle';
import Modal from 'react-modal';
import aus from '../image/logo/ausopen-logo2.svg';
import rol from '../image/logo/rolandgarros-logo.svg';
import us from '../image/logo/usopen-logo.svg';
import wim from '../image/logo/wimbledon-logo.svg';

const CustomModal = ({ modalOpen, setModalOpen, setTheme }) => {
  
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={style.customModal}
      ariaHideApp={false}
      contentLabel="Choose the Theme"
      shouldCloseOnOverlayClick={false}
    >
      <style.Title>테마선택</style.Title>
      <style.Theme
        src={aus}
        onClick={() => {
          setTheme('aus');
        }}
      ></style.Theme>
      <style.Theme
        src={rol}
        onClick={() => {
          setTheme('roland');
        }}
      ></style.Theme>
      <style.Theme
        src={wim}
        onClick={() => {
          setTheme('wimbledon');
        }}
      ></style.Theme>
      <style.Theme
        src={us}
        onClick={() => {
          setTheme('us');
        }}
      ></style.Theme>
    </Modal>
  );
};

export default CustomModal;
