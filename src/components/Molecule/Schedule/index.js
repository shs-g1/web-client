import { SubTitle, Calendar } from "../../index";
import { Container } from "./styled";

const Schedule = () => {
  return (
    <Container>
      <SubTitle subTitle="일정 관리" />
      <Calendar></Calendar>
    </Container>
  );
};
export default Schedule;
