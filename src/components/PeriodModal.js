import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalPortal from '../ModalPortal';
import * as style from '../styles/PeriodStyle';

import aus from '../image/logo/ausopen-logo2.svg';
import rol from '../image/logo/rolandgarros-logo.svg';
import us from '../image/logo/usopen-logo.svg';
import wim from '../image/logo/wimbledon-logo.svg';
import downButton from '../image/downButton.svg';
import CustomHeader from './CustomHeader';

const PeriodModal = ({ isOpen, onRequestClose }) => {
  const themes = [
    { name: 'aus', src: aus, title: 'Aus open' },
    { name: 'roland', src: rol, title: 'Roland garros' },
    { name: 'wimbledon', src: wim, title: 'Wimbledon' },
    { name: 'us', src: us, title: 'US open' },
  ];

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  const localSave = JSON.parse(localStorage.getItem('period'));

  const formattedLocalSave = localSave?.map(league => {
    const startDate = new Date(league.startDate);
    const endDate = new Date(league.endDate);
    return {
      ...league,
      startDate: startDate.toLocaleDateString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }),
      endDate: endDate.toLocaleDateString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }),
    };
  })

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
  
   const handleModal = e => {
    e.stopPropagation();
   }

   //기간 저장
   const handleSave = async () => {
     try {
      onRequestClose();
      // console.log('기간저장 :', themeStates);
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
                    <label>
                      {/* <style.Dropdown src={downButton} alt="dropdownButton" /> */}
                      <style.StyledDatePicker
                        formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
                        dateFormat="yy.MM.dd" // 날짜 형태
                        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                        minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                        selectsStart
                        selected={themeStates[idx].startDate}
                        onChange={handleThemeDateChange(idx, 'startDate')}
                        placeholderText={
                          localSave
                            ? formattedLocalSave[idx].startDate
                            : formattedDate
                        }
                        renderCustomHeader={({
                          date,
                          changeMonth,
                          changeYear,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                          decreaseMonth,
                          increaseMonth,
                        }) => (
                          <CustomHeader
                            date={date}
                            changeMonth={changeMonth}
                            changeYear={changeYear}
                            prevMonthButtonDisabled={prevMonthButtonDisabled}
                            nextMonthButtonDisabled={nextMonthButtonDisabled}
                            decreaseMonth={decreaseMonth}
                            increaseMonth={increaseMonth}
                          />
                        )}
                      />
                    </label>
                    <div className="dash">~</div>
                    <label>
                      {/* <style.Dropdown src={downButton} alt="dropdownButton" /> */}
                      <style.StyledDatePicker
                        formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
                        dateFormat="yy.MM.dd" // 날짜 형태
                        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                        minDate={
                          themeStates[idx].endDateMinDate ||
                          themeStates[idx].startDate
                        }
                        selectsEnd
                        selected={themeStates[idx].endDate}
                        onChange={handleThemeDateChange(idx, 'endDate')}
                        placeholderText={
                          localSave
                            ? formattedLocalSave[idx].endDate
                            : formattedDate
                        }
                        renderCustomHeader={({
                          date,
                          changeMonth,
                          changeYear,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                          decreaseMonth,
                          increaseMonth,
                        }) => (
                          <CustomHeader
                            date={date}
                            changeMonth={changeMonth}
                            changeYear={changeYear}
                            prevMonthButtonDisabled={prevMonthButtonDisabled}
                            nextMonthButtonDisabled={nextMonthButtonDisabled}
                            decreaseMonth={decreaseMonth}
                            increaseMonth={increaseMonth}
                          />
                        )}
                      />
                    </label>
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
