import { Container, Text, Time } from "./styled";
const TodoListItem = ({ time, text }) => {
  return (
    <Container>
      <Time>{time}</Time>
      <Text>{text}</Text>
    </Container>
  );
};
export default TodoListItem;
