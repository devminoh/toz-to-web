import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalPortal from '../ModalPortal';
import * as style from '../styles/PeriodStyle';
import { getMonth, getYear } from 'date-fns';

import aus from '../image/logo/ausopen-logo2.svg';
import rol from '../image/logo/rolandgarros-logo.svg';
import us from '../image/logo/usopen-logo.svg';
import wim from '../image/logo/wimbledon-logo.svg';
import downButton from '../image/downButton.svg';

const PeriodModal = ({ isOpen, onRequestClose }) => {
  const themes = [
    { name: 'aus', src: aus, title: 'Aus open' },
    { name: 'roland', src: rol, title: 'Roland garros' },
    { name: 'wimbledon', src: wim, title: 'Wimbledon' },
    { name: 'us', src: us, title: 'US open' },
  ];

  const YEARS = Array.from(
    { length: getYear(new Date()) + 1 - 2000 },
    (_, i) => getYear(new Date()) - i,
  );
  const MONTHS = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
  ];

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  const [themeStates, setThemeStates] = useState(
    themes.map(() => ({
      startDate: null,
      endDate: null,
    })),
  );

  const handleThemeDateChange = (themeIndex, dateType) => date => {
    setThemeStates(prevStates => {
      const newStates = [...prevStates];
      newStates[themeIndex] = {
        ...newStates[themeIndex],
        [dateType]: date,
      };
      if (dateType === 'startDate' && date) {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        newStates[themeIndex].endDate = null;
        newStates[themeIndex].endDateMinDate = nextDay;
      }

      return newStates;
    });
  };
  // console.log(themeStates);
   const handleModal = e => {
    e.stopPropagation();
   }

   //기간 저장
   const handleSave = async () => {
     try {
      onRequestClose();
      console.log('기간저장 :', themeStates);
      localStorage.setItem('period', JSON.stringify(themeStates));
       // 서버에 기간 저장하는 HTTP 요청
      //  const response = await fetch('your-api-endpoint', {
      //    method: 'POST',
      //    headers: {
      //      'Content-Type': 'application/json',
      //    },
      //    body: JSON.stringify(themeStates),
      //  });

      //  if (response.ok) {
      //    console.log('기간이 성공적으로 저장되었습니다.');
      //  } else {
      //    console.error('기간 저장에 실패했습니다.');
      //  }
     } catch (error) {
       console.error('서버 요청 중 오류 발생:', error);
     }
   };


  return (
    <style.PeriodContainer onClick={handleModal}>
      <ModalPortal>
        <Modal
          isOpen={isOpen}
          ariaHideApp={false}
          style={style.periodModal}
          onRequestClose={onRequestClose}
          shouldCloseOnOverlayClick={false}
        >
          <style.ThemeContainer>
            {themes.map(({ name, src, title }, idx) => (
              <style.smallTheme key={title}>
                <style.Theme src={src}></style.Theme>
                <style.Right>
                  <div>{title}</div>
                  <div className="date">
                    <style.StyledDatePicker
                      dateFormat="yy.MM.dd" // 날짜 형태
                      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                      minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                      selectsStart
                      // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                      selected={themeStates[idx].startDate}
                      onChange={handleThemeDateChange(idx, 'startDate')}
                      buttonImage={downButton}
                      placeholderText={formattedDate}
                    />
                    <div className='dash'>~</div>
                    <style.StyledDatePicker
                      dateFormat="yy.MM.dd" // 날짜 형태
                      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                      minDate={
                        themeStates[idx].endDateMinDate ||
                        themeStates[idx].startdownDate
                      }
                      selectsEnd
                      // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                      selected={themeStates[idx].endDate}
                      onChange={handleThemeDateChange(idx, 'endDate')}
                      placeholderText={formattedDate}
                    />
                  </div>
                </style.Right>
              </style.smallTheme>
            ))}
          </style.ThemeContainer>
          <style.Buttons>
            <button className="cancle" onClick={onRequestClose}>
              취소
            </button>
            <button className="save" onClick={handleSave}>
              저장
            </button>
          </style.Buttons>
        </Modal>
      </ModalPortal>
    </style.PeriodContainer>
  );
};

export default PeriodModal;
