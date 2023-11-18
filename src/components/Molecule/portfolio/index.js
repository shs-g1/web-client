import { SubTitle, BarChart } from "../../index";
import { Container, Reduce } from "./styled";
const Portfolio = () => {
  return (
    <Container>
      <SubTitle subTitle="포트폴리오"></SubTitle>
      <Reduce>
        <BarChart></BarChart>
      </Reduce>
    </Container>
  );
};

export default Portfolio;
