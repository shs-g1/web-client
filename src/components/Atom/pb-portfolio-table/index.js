// components/Atom/pb-portfolio-table/index.js
// 고객에게 보여지는 페이지에서 바로 노출되는 포트폴리오 3개의 리스트

import React from "react";
import { Container, Title, Table, Thead, Tbody, Tr, Th, Td } from "./styled";

const AtomPBPortfolioTable = ({ title, content, onRowClick }) => {
  const tableData = {
    portfolioNames: content.portfolioNames, // 이름
    principals: content.principals, // 투자원금
    returns: content.returns, // 투자수익률
    MDDs: content.MDDs, // MDD
    cumulativeRORs: content.cumulativeRORs, // 누적수익률
    durations: content.durations, // 기간
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>투자 원금</Th>
            <Th>투자 수익</Th>
          </Tr>
          <Tr>
            <Th>누적 수익률</Th>
            <Th>MDD</Th>
            <Th>기간</Th>
          </Tr>
        </Thead>
        {tableData.portfolioNames.map((portfolioName, index) => (
          <Tbody>
            <Tr key={index} onClick={() => onRowClick(tableData, index)}>
              <Td>{portfolioName}</Td>
              <Td>{tableData.principals[index]}원</Td>
              <Td>{tableData.returns[index]}원</Td>
            </Tr>
            <Tr>
              <Td>{tableData.cumulativeRORs[index]}%</Td>
              <Td>{tableData.MDDs[index]}%</Td>
              <Td>{tableData.durations[index]}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Container>
  );
};

export default AtomPBPortfolioTable;
