import { TodoListItem } from "../../index";
import { Container, Item, ListHeader } from "./styled";
const Todo = ({ events }) => {
  return (
    <Container>
      <ListHeader>오늘 일정</ListHeader>

      {events.map((event, index) => (
        <Item>
          <TodoListItem key={index} time={event.time} text={event.text} />
        </Item>
      ))}
    </Container>
  );
};
export default Todo;
