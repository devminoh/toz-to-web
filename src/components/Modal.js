import React from 'react';
import * as style from '../styles/modalStyle';
import Modal from 'react-modal';
import aus from '../image/logo/ausopen-logo2.svg';
import rol from '../image/logo/rolandgarros-logo.svg';
import us from '../image/logo/usopen-logo.svg';
import wim from '../image/logo/wimbledon-logo.svg';

const CustomModal = ({ modalOpen, setModalOpen, setTheme, theme }) => {
  const themes = [
    { name: 'aus', src: aus },
    { name: 'roland', src: rol },
    { name: 'wimbledon', src: wim },
    { name: 'us', src: us },
  ];

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

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
      {themes.map(({ name, src }) => (
        <style.Theme
          key={name}
          src={src}
          onClick={() => {
            changeTheme(name);
          }}
        ></style.Theme>
      ))}
    </Modal>
  );
};

export default CustomModal;
