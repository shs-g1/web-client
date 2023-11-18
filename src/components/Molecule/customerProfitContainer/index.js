import { Container, Bold, Text, TextContainer } from "./styled";

const CustomerProfitContainer = () => {
  return (
    <Container>
      <TextContainer>
        <Bold>누적 수익률</Bold>
        <Text>29.5%</Text>
      </TextContainer>
      <TextContainer>
        <Bold>손익 금액</Bold>
        <Text>1000000원</Text>
      </TextContainer>
      <TextContainer>
        <Bold>자산 금액</Bold>
        <Text>14400000원</Text>
      </TextContainer>
    </Container>
  );
};
export default CustomerProfitContainer;
