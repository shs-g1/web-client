import { Container } from "./styled";
import { Header, PageTitle } from "../../components/index";

const Management = () => {
  return (
    <Container>
      <Header tab={2}></Header>
      <PageTitle blueTItle="고나형님의 " title="자산 관리 현황입니다. " />
    </Container>
  );
};
export default Management;
