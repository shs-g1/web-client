import { TodoListItem } from "../../index";
import { Container, Item, ListHeader, Text } from "./styled";
const Todo = ({ events }) => {
  return (
    <Container>
      <ListHeader>오늘 일정</ListHeader>

      {events ? (
        events.map((event, index) => (
          <Item>
            <TodoListItem
              key={index}
              time={event.time?.substring(0, 5)}
              text={event.title}
            />
          </Item>
        ))
      ) : (
        <Text> 오늘은 일정이 없습니다.</Text>
      )}
    </Container>
  );
};
export default Todo;
