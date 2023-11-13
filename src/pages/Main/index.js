import { Container, MainContainer } from "./styled";
import { Header, PageTitle, Schedule } from "../../components/index";

const Main = () => {
  return (
    <Container>
      <Header tab={1}></Header>
      <MainContainer>
        <PageTitle blueTItle="OO님의 " title="작업 공간입니다. " />
        <Schedule></Schedule>
      </MainContainer>
    </Container>
  );
};
export default Main;
