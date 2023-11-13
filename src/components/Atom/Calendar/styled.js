/*Calendar */
import styled from "styled-components";
export const ReduceSize = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  // 캘린더 전체 사이즈 조정
  .fc {
    width: 55%;
  }

  .fc .fc-col-header-cell-cushion {
    display: inline-block;
    padding: 2px 4px;
  }
`;
