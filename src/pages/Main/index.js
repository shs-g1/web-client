import { Container } from "./styled";
import { Header, PageTitle } from "../../components/index";

const Main = () => {
  return (
    <Container>
      <Header tab={1}></Header>
      <PageTitle blueTItle="OO님의 " title="작업 공간입니다. " />
    </Container>
  );
};
export default Main;
