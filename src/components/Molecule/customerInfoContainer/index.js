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
          <Name>{customer.name}</Name>
          <TextContainer>
            <Text>{customer.phone}</Text>
            <Text>{customer.email}</Text>
          </TextContainer>
        </NameContainer>
        <ButtonContainer>
          <OptionButton
            text={customer.type + "형"}
            color="white"
          ></OptionButton>
          <OptionButton text={customer.option} color="blue"></OptionButton>
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};
export default CustomerInfoContainer;
