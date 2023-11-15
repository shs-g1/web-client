import { Container, MainContainer } from "./styled";
import { Header, PageTitle } from "../../components/index";

const Management = () => {
  return (
    <>
      <Header tab={2}></Header>
      <Container>
        <MainContainer>
          <PageTitle blueTItle="고나형님의 " title="자산 관리 현황입니다. " />
        </MainContainer>
      </Container>
    </>
  );
};
export default Management;
