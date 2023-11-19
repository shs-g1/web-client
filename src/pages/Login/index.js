import {
  Container,
  Title,
  LoginContainer,
  Label,
  Input,
  LoginButton,
  InputContainer,
} from "./styled";
import { LoginHeader } from "../../components/index";
const Login = () => {
  return (
    <>
      <LoginHeader />
      <Container>
        <Title>LOGIN</Title>
        <LoginContainer>
          <InputContainer>
            <Label>ID</Label>
            <Input placeholder="ID"></Input>
            <Label>PASSWORD</Label>
            <Input placeholder="PASSWORD" type="password"></Input>
          </InputContainer>
          <LoginButton>LOGIN</LoginButton>
        </LoginContainer>
      </Container>
    </>
  );
};
export default Login;
