import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const periodModal = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '3',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '420px',
    height: '500px',
    zIndex: '4',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
};

export const PeriodContainer = styled.div`
  border: 1px solid red;
  z-index: ${props => (props.isOpen ? 9999 : -1)};
  `;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
`;

export const smallTheme = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  div {
    font-family: Noto Sans CJK KR;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    &.date {
      display: flex;
    }
    &.dash {
      display: flex;
      align-items: center;
      margin: 0 10px;
    }
  }
`;

export const Theme = styled.img`
  width: 70px;
  height: 70px;
  padding: 10px;
  margin-right: 5px;
  overflow: hidden;
  border: 1.5px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 50%;
    height: 54px;
    top: 638px;
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.cancle {
      background: rgba(238, 238, 238, 1);
    }
    &.save {
      color: rgba(255, 255, 255, 1);
      background: rgba(43, 43, 43, 1);
    }
  }
`;


export const StyledDatePicker = styled(DatePicker)`
  width: 97px;
  height: 36px;
  top: 98px;
  left: 99px;
  padding: 6px;
  border-radius: 4px;
  gap: 6px;
  border: 1px solid rgba(215, 215, 215, 1);
  cursor: pointer;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  > p {
    margin: 0 20px;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  margin: 0 10px;
  font-weight: 700;

  &:hover {
    
  }

  &:disabled {
    cursor: default;
  }
`;

export const Month = styled.span`
  font-weight: 500;
  padding-left: 10px;
`;

export const Year = styled.select`
  border: none;
  font-weight: 500;
  cursor: pointer;
  background-color: #f0f0f0;
`;