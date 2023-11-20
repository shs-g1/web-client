import {
  Title,
  LoginContainer,
  Label,
  Input,
  LoginButton,
  InputContainer,
  Error,
  Container,
} from "./styled";
import { LoginHeader } from "../../components/index";
import { instance } from "../../apis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(true);

  const navigate = useNavigate();

  const handleNickNameChange = (event) => {
    setUserId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userId, password, "userId, password");

    try {
      const response = await instance.post(
        `/login`,
        {
          loginId: userId,
          loginPw: password,
        },
        {
          withCredentials: true,
        }
      );
      // 로그인 성공 처리
      alert("로그인 성공:", response.data);
      navigate("/main");
    } catch (error) {
      setSuccessLogin(false);
      console.error("로그인 실패:", error.response.data.reason);
    }
  };

  return (
    <>
      <LoginHeader></LoginHeader>
      <Container>
        <Title>LOGIN</Title>
        <LoginContainer onSubmit={handleFormSubmit}>
          <InputContainer>
            <Label>ID</Label>
            <Input
              id="userId"
              placeholder="ID"
              type="text"
              value={userId}
              onChange={handleNickNameChange}
            ></Input>
            <Label>PASSWORD</Label>
            <Input
              id="password"
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            ></Input>
          </InputContainer>
          <LoginButton type="submit">LOGIN</LoginButton>
          {successLogin ? null : (
            <Error>아이디와 비밀번호를 다시 확인해주세요.</Error>
          )}
        </LoginContainer>
      </Container>
    </>
  );
};
export default Login;
