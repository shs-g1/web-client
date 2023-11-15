import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainContainer = styled.div`
  width: 85vw;
`;
export const ScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackgroundImage = styled.div`
  width: 90vw;
  height: 88vh;
  background-color: #ffffff;
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: -1;
  border-radius: 20px;
`;
