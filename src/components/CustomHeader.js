import React from "react";
import * as style from '../styles/PeriodStyle';
import { ThemeConsumer } from "styled-components";

// components
import { getMonth, getYear } from "date-fns";

const CustomHeader = ({
  date,
  changeMonth,
  changeYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  decreaseMonth,
  increaseMonth,
}) => {
  const years = Array.from(
    { length: getYear(new Date()) + 1 - 2000 },
    (_, i) => getYear(new Date()) - i,
  );
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const formatDate = d => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
  };

  return (
    <ThemeConsumer>
      {theme => (
        <style.Wrap>
          <style.Button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {'<'}
          </style.Button>
          <style.Year
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </style.Year>
          <style.Month
          >
            {months[getMonth(date)]}
          </style.Month>
          <style.Button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {'>'}
          </style.Button>
        </style.Wrap>
      )}
    </ThemeConsumer>
  );
};

export default CustomHeader;