/*Calendar */
import styled from "styled-components";
export const Style = styled.div`
  padding: "0";
  thead {
    font-weight: 700;
    padding: 10px;
  }
  th {
    padding: 10px;
    text-align: center;
    background-color: #fafafa;
    border-radius: 6px;
    color: #b5b5c3;
    font-size: 16px;
    font-weight: 600;
  }

  td {
    padding: 20px 10px;
    text-align: center;
    color: #464e5f;
    font-size: 16px;
    font-weight: 600;
    word-break: break-all; /* 텍스트가 셀을 넘어갈 경우 단어 단위로 줄 바꿈 */
    max-width: 200px; /* 최대 너비를 지정 (원하는 값으로 조절) */
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.div``;

export const Red = styled.div`
  color: #c13c3c;
`;

export const Blue = styled.div`
  color: #175ae9;
`;
