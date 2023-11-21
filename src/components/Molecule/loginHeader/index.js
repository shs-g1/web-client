import { Container, Image } from "./styled";
import HeaderImage from "../../../assets/images/headerImg.png";
const LoginHeader = ({ width }) => {
  return (
    <Container width={width}>
      <Image src={HeaderImage} alt="header" />
    </Container>
  );
};
export default LoginHeader;
