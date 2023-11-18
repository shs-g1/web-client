/*Calendar */
import styled from "styled-components";
export const ReduceSize = styled.div`
  padding: "0";
  .fc {
    width: 730px;
    padding: 0;
  }

  .fc .fc-col-header-cell-cushion {
    display: inline-block;
    padding: 2px 4px;
  }

  //캘린더 타이틀 크기 조정

  .fc-toolbar-title {
    font-size: 24px;
    font-weight: 700;
  }
  //캘릭더 버튼 크기 조절
  .fc-prev-button,
  .fc-next-button,
  .fc-dayGridMonth-button {
    font-size: 14px;
    padding: 5px 10px;
    background-color: #384a7d;
  }

  .fc-today-button {
    font-size: 14px;
    padding: 5px 10px;
    background-color: #757f8b;
    border: none;
  }

  /* 오늘의 날짜 색변경*/
  .fc-dayGridMonth-view tbody .fc-day-today {
    background-color: #eaeff6;
  }
`;
