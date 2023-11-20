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
        {/* <CustomerImage src={customer.name[0]}></CustomerImage> */}
      </LeftContainer>
      <RightContainer>
        <NameContainer>
          {/* <Name>{customer.name[0]}</Name> */}
          <TextContainer>
            <Text>{customer.phone}</Text>
            <Text>{customer.email}</Text>
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
