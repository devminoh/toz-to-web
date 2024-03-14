import React, { useState } from 'react';
import * as style from '../styles/modalStyle';
import Modal from 'react-modal';
import PeriodModal from './PeriodModal';
import ModalPortal from '../ModalPortal';
import aus from '../image/logo/ausopen-logo2.svg';
import rol from '../image/logo/rolandgarros-logo.svg';
import us from '../image/logo/usopen-logo.svg';
import wim from '../image/logo/wimbledon-logo.svg';

const CustomModal = ({ modalOpen, setModalOpen, setTheme, closeModal }) => {
  const [periodModalOpen, setPeriodModalOpen] = useState(false);
  const [newTheme, setNewTheme] = useState('us');
  // console.log(newTheme)
  // console.log('modalOpen:', modalOpen); // 확인용 로그 추가
  const openPeriodModal = e => {
    e.stopPropagation();
    setPeriodModalOpen(true);
  };

  const closePeriodModal = () => {
    setPeriodModalOpen(false);
  };

  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    { name: 'aus', src: aus },
    { name: 'roland', src: rol },
    { name: 'wimbledon', src: wim },
    { name: 'us', src: us },
  ];

  const handleThemeClick = name => {
    setSelectedTheme(name);
    setNewTheme(name);
  };

  const changeTheme = (newTheme, e) => {
    e.stopPropagation();
    // console.log('change', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setModalOpen(false);
  };

  const handleAutoTheme = () => {
    const periodDetail = JSON.parse(localStorage.getItem('period'));
    // console.log(periodDetail);

    const getThemePeriod = date => {
      const current = new Date(date);
      for (let i = 0; i < periodDetail.length; i++) {
        const { startDate, endDate } = periodDetail[i];
        const parseStart = new Date(startDate);
        const parseEnd = new Date(endDate);

        if (current >= parseStart && current <= parseEnd) {
          switch (i) {
            default:
              return null;
            case 0:
              return 'aus';
            case 1:
              return 'roland';
            case 2:
              return 'wimbledon';
            case 3:
              return 'us';
          }
        }
      }
      return null;
    };
    const currentDate = new Date();
    const themeDate = getThemePeriod(currentDate);
    // console.log(themeDate);
    setTheme(themeDate);
  };

  return (
    <>
      {modalOpen && (
        <ModalPortal>
          <Modal
            isOpen={modalOpen}
            style={style.customModal}
            ariaHideApp={false}
            contentLabel="Choose the Theme"
            shouldCloseOnOverlayClick={false}
          >
            <style.TopContainer>
              <style.Top>
                <div>
                  <style.Title>자동설정</style.Title>
                  <style.Content>
                    해당기간 리그가 자동 변경됩니다.
                  </style.Content>
                  <style.AutoTheme onClick={handleAutoTheme} />
                </div>
                <style.Period onClick={openPeriodModal}>기간설정</style.Period>
                {periodModalOpen && (
                  <PeriodModal
                    isOpen={periodModalOpen}
                    onRequestClose={closePeriodModal}
                  />
                )}
              </style.Top>
              <style.Title>테마선택</style.Title>
              {themes.map(({ name, src }) => (
                <style.Theme
                  key={name}
                  src={src}
                  alt={name}
                  isSelected={selectedTheme === name}
                  onClick={() => handleThemeClick(name)}
                ></style.Theme>
              ))}
            </style.TopContainer>
            <style.Buttons>
              <button className="cancel" onClick={closeModal}>
                취소
              </button>
              <button
                className="save"
                onClick={e => {
                  changeTheme(newTheme, e);
                }}
              >
                저장
              </button>
            </style.Buttons>
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

export default CustomModal;
