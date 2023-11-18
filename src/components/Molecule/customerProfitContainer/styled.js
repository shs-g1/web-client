import styled from "styled-components";

export const Container = styled.div`
  width: 510px;
  height: 90px;
  padding: 50px 44px;
  border-radius: 20px;
  background: #f3f3f4;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 10px;
`;

export const Bold = styled.div`
  color: #384a7d;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Text = styled.div`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
