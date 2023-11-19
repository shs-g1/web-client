import { Container, Image } from "./styled";
import HeaderImage from "../../../assets/images/headerImg.png";
const LoginHeader = () => {
  return (
    <Container>
      <Image src={HeaderImage} alt="header" />
    </Container>
  );
};
export default LoginHeader;
