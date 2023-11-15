import { Container, MainContainer, ScheduleContainer } from "./styled";
import {
  Header,
  PageTitle,
  Calendar,
  Todo,
  SubTitle,
} from "../../components/index";

const Main = () => {
  return (
    <>
      <Header tab={1}></Header>
      <Container>
        <MainContainer>
          <PageTitle blueTItle="OO님의 " title="작업 공간입니다. " />
          <SubTitle subTitle="일정 관리"></SubTitle>
          <ScheduleContainer>
            <Calendar></Calendar>
            <Todo
              events={[
                {
                  time: "12:00",
                  text: "새침이랑 여의도",
                },
              ]}
            ></Todo>
          </ScheduleContainer>
        </MainContainer>
      </Container>
    </>
  );
};
export default Main;
