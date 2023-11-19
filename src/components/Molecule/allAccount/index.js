import { Container } from "./styled.js";
import { SubTitle, Table } from "../../index";
import React, { forwardRef } from "react";

const AllAccount = forwardRef((props, ref) => {
  const tableHeader = ["계좌번호", "총자산", "출금가능금액"];
  const tables = [
    {
      id: "0",
      계좌번호: ["종합매매", "27071571643", "고나형"],
      총자산: "100000000",
      출금가능금액: "100000000",
    },
    {
      id: "1",
      계좌번호: ["종합매매", "27071571643", "고나형"],
      총자산: "4350002000",
      출금가능금액: "20000000",
    },
  ];

  return (
    <Container ref={ref}>
      <SubTitle subTitle="전체 계좌"></SubTitle>
      <Table nodes={tables} header={tableHeader}></Table>
    </Container>
  );
});

export default AllAccount;
