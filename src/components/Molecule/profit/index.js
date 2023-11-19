import { LineChart, SubTitle } from "../../index";
import { Reduce, Container } from "../portfolio/styled";
const Profit = () => {
  return (
    <Container>
      <SubTitle subTitle="수익률"></SubTitle>
      <Reduce>
        <LineChart></LineChart>
      </Reduce>
    </Container>
  );
};
export default Profit;
