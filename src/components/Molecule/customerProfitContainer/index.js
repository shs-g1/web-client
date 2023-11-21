import { Container, Bold, Text, TextContainer } from "./styled";

const CustomerProfitContainer = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <TextContainer>
        <Bold>누적 수익률</Bold>
        <Text>{data.currentProfitRate}%</Text>
      </TextContainer>
      <TextContainer>
        <Bold>손익 금액</Bold>
        <Text>{data.profits}원</Text>
      </TextContainer>
      <TextContainer>
        <Bold>자산 금액</Bold>
        <Text>{data.totalAssets}원</Text>
      </TextContainer>
    </Container>
  );
};
export default CustomerProfitContainer;
