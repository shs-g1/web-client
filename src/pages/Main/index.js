import {
  Container,
  MainContainer,
  ScheduleContainer,
  RightContainer,
  BackgroundImage,
  BackgroundImage2,
  GreyTitle,
} from "./styled";
import {
  Header,
  PageTitle,
  Calendar,
  Todo,
  SubTitle,
  Incentive,
  Table,
} from "../../components/index";
import CustomerImg from "../../assets/images/customerImg.png";

const Main = () => {
  const tables = [
    {
      id: "0",
      이름: [CustomerImg, "고나형"],
      전화번호: "010-1234-5678",
      이메일: "123@gmail.com",
      자산총액: "6510293",
      목표수익률: "15",
      현재수익률: "-15",
    },
    {
      id: "1",
      이름: [CustomerImg, "나영현"],
      전화번호: "010-1234-5678",
      이메일: "123@gmail.com",
      자산총액: "6510293",
      목표수익률: "15",
      현재수익률: "15",
    },
    {
      id: "2",
      이름: [CustomerImg, "안정민"],
      전화번호: "010-1234-5678",
      이메일: "123@gmail.com",
      자산총액: "6510293",
      목표수익률: "15",
      현재수익률: "15",
    },
    {
      id: "3",
      이름: [CustomerImg, "이재연"],
      전화번호: "010-1234-5678",
      이메일: "123@gmail.com",
      자산총액: "6510293",
      목표수익률: "15",
      현재수익률: "15",
    },
    {
      id: "4",
      이름: [CustomerImg, "홍보영"],
      전화번호: "010-1234-5678",
      이메일: "123@gmail.com",
      자산총액: "6510293",
      목표수익률: "15",
      현재수익률: "15",
    },
  ];

  const tableHeader = [
    "이름",
    "전화번호",
    "이메일",
    "자산총액",
    "목표수익률",
    "현재수익률",
  ];

  return (
    <>
      <Header tab={1}></Header>

      <Container>
        <MainContainer>
          <BackgroundImage>
            <PageTitle blueTItle="OO님의 " title="작업 공간입니다. " />
            <SubTitle subTitle="일정 관리"></SubTitle>
            <ScheduleContainer>
              <Calendar></Calendar>
              <RightContainer>
                <Todo
                  events={[
                    {
                      time: "12:00",
                      text: "새침이랑 여의도",
                    },
                  ]}
                ></Todo>
                <Incentive
                  title="누적 인센티브"
                  incentiveTitle="누적된 인센티브는"
                  incentive="100000원"
                ></Incentive>
              </RightContainer>
            </ScheduleContainer>
          </BackgroundImage>
          <BackgroundImage2>
            <SubTitle subTitle="고객 리스트"></SubTitle>
            <GreyTitle>{tables.length}명의 고객님과 함께하고 있어요.</GreyTitle>
            <Table nodes={tables} header={tableHeader}></Table>
          </BackgroundImage2>
        </MainContainer>
      </Container>
    </>
  );
};
export default Main;
