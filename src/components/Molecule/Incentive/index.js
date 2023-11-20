import {
  Container,
  Title,
  IncentiveItem,
  IncentiveBlue,
  IncentiveContainer,
} from "./styled";

const Incentive = ({ title, incentiveTitle, incentive }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <IncentiveContainer>
        <IncentiveItem>{incentiveTitle}</IncentiveItem>
        <IncentiveBlue>{incentive}원</IncentiveBlue>
        <IncentiveItem>입니다.</IncentiveItem>
      </IncentiveContainer>
    </Container>
  );
};
export default Incentive;
