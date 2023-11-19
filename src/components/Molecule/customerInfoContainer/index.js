import { OptionButton } from "../../index";
import {
  Container,
  ButtonContainer,
  LeftContainer,
  RightContainer,
  CustomerImage,
  TextContainer,
  Text,
  Name,
  NameContainer,
} from "./styled";

const CustomerInfoContainer = ({ customer }) => {
  return (
    <Container>
      <LeftContainer>
        <CustomerImage src={customer.이름[0]}></CustomerImage>
      </LeftContainer>
      <RightContainer>
        <NameContainer>
          <Name>{customer.이름[1]}</Name>
          <TextContainer>
            <Text>{customer.전화번호}</Text>
            <Text>{customer.이메일}</Text>
          </TextContainer>
        </NameContainer>
        <ButtonContainer>
          <OptionButton text="안정형" color="white"></OptionButton>
          <OptionButton text="일반 고객" color="blue"></OptionButton>
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};
export default CustomerInfoContainer;
