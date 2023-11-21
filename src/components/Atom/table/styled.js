/*Calendar */
import styled from "styled-components";
export const Style = styled.div`
  padding: "0";
  table: {
    text-align: "center";
  }
  thead {
    font-weight: 700;
    padding: 10px;
  }
  th {
    padding: 10px 20px;
    text-align: center;
    background-color: #fafafa;
    color: #b5b5c3;
    font-size: 16px;
    font-weight: 600;
    max-width: 500px;
  }

  td {
    padding: 15px 0px;
    text-align: center;
    color: #464e5f;
    font-size: 16px;
    font-weight: 600;
    word-break: break-all;
    max-width: 500px;
  }

  tr {
    &:hover {
      background-color: #fafafa;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-left: -20px;
`;

export const Name = styled.div`
  text-align: center;
`;

export const Red = styled.div`
  color: #c13c3c;
`;

export const Blue = styled.div`
  color: #175ae9;
`;
export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const Button = styled.button`
  color: #175ae9;
  border: 1px solid #175ae9;
  border-radius: 5px;
  background-color: white;
  width: 80px;
  padding: 5px 5px;
`;
