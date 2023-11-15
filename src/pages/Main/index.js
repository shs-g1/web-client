import {
  Container,
  MainContainer,
  ScheduleContainer,
  RightContainer,
} from "./styled";
import {
  Header,
  PageTitle,
  Calendar,
  Todo,
  SubTitle,
  Incentive,
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
            <RightContainer>
              <Todo
                events={[
                  {
                    time: "12:00",
                    text: "새침이랑 여의도",
                  },
                ]}
              ></Todo>
              <Incentive
                title="누적 인센티브"
                incentiveTitle="지금까지의 인센티브는"
                incentive="100000원"
              ></Incentive>
            </RightContainer>
          </ScheduleContainer>
        </MainContainer>
      </Container>
    </>
  );
};
export default Main;
