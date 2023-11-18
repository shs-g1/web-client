import { Container, MainContainer, SlideNav } from "./styled";
import { Header, PageTitle, SlideButton } from "../../components/index";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Management = () => {
  const location = useLocation();
  const rowData = location.state?.rowData;
  const [selectedTab, setSelectedTab] = useState(1);

  console.log(rowData);
  if (!rowData) {
    return <p>고객 정보를 찾을 수 없습니다.</p>;
  }

  const handleTabSelect = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <>
      <Header tab={2}></Header>
      <Container>
        <MainContainer>
          <PageTitle blueTItle={" 고객님의"} title="자산 관리 현황입니다. " />
          <SlideNav>
            <SlideButton
              text="고객 자산관리 현황"
              onSelect={() => {
                handleTabSelect(1);
              }}
              isSelected={selectedTab === 1}
            />
            <SlideButton
              text="수익률"
              onSelect={() => {
                handleTabSelect(2);
              }}
              isSelected={selectedTab === 2}
            />
            <SlideButton
              text="잔고/체결내역"
              onSelect={() => {
                handleTabSelect(3);
              }}
              isSelected={selectedTab === 3}
            />
          </SlideNav>
        </MainContainer>
      </Container>
    </>
  );
};
export default Management;
