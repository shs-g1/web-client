import { SubTitle, BarChart } from "../../index";
import { Container, Reduce } from "./styled";
import React, { forwardRef } from "react";

const Portfolio = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <SubTitle subTitle="포트폴리오"></SubTitle>
      <Reduce>
        <BarChart></BarChart>
      </Reduce>
    </Container>
  );
});

export default Portfolio;
