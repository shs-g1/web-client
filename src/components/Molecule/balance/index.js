import { Container, MiniTitle, Margin } from "./styled";
import { SubTitle, Table } from "../../index";
const Balance = () => {
  const tableHeader = ["종목코드", "종목명", "투자수량", "평가금액"];
  const jusikData = [
    {
      종목코드: "A005930",
      종목명: "삼성전자",
      투자수량: "100",
      평가금액: "1000000",
    },
    {
      종목코드: "A005930",
      종목명: "삼성전자",
      투자수량: "100",
      평가금액: "1000000",
    },
  ];
  const chaegwonData = [
    {
      종목코드: "R6003492DB8",
      종목명: "대한항공 105-2",
      투자수량: "50",
      평가금액: "1000000",
    },
    {
      종목코드: "R6003492DB8",
      종목명: "대한항공 105-2",
      투자수량: "50",
      평가금액: "1000000",
    },
  ];
  const pasaengData = [
    {
      종목코드: "9002000",
      종목명: "삼성인덱스프리미엄30증권투자회사",
      투자수량: "50",
      평가금액: "1000000",
    },
  ];
  return (
    <Container>
      <SubTitle subTitle="잔고/체결내역"></SubTitle>
      <MiniTitle>주식</MiniTitle>
      <Table nodes={jusikData} header={tableHeader}></Table>
      <Margin></Margin>
      <MiniTitle>채권</MiniTitle>
      <Table nodes={chaegwonData} header={tableHeader}></Table>

      <Margin></Margin>
      <MiniTitle>파생</MiniTitle>
      <Table nodes={pasaengData} header={tableHeader}></Table>
    </Container>
  );
};
export default Balance;
