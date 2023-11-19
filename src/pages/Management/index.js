import {
  Container,
  MainContainer,
  SlideNav,
  CustomerContainer,
  PortfolioContainer,
} from "./styled";
import {
  Header,
  PageTitle,
  SlideButton,
  CustomerInfoContainer,
  CustomerProfitContainer,
  Portfolio,
  Profit,
  AllAccount,
  Balance,
} from "../../components/index";
import { BackgroundImage } from "../Main/styled";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";

const Management = () => {
  const location = useLocation();
  const rowData = location.state?.rowData;
  const [selectedTab, setSelectedTab] = useState(1);

  const customerRef = useRef(null);
  const allAccountRef = useRef(null);
  const balanceRef = useRef(null);

  const handleTabSelect = (tabIndex) => {
    setSelectedTab(tabIndex);

    switch (tabIndex) {
      case 1:
        customerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        allAccountRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        balanceRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        break;
    }
  };

  console.log(rowData);
  if (!rowData) {
    return <p>고객 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <Header tab={2}></Header>
      <Container>
        <MainContainer>
          <BackgroundImage>
            <PageTitle
              blueTItle={`${rowData.이름[1]}` + " 고객님의"}
              title="자산 관리 현황입니다. "
            />
            <SlideNav>
              <SlideButton
                text="고객 자산관리 현황"
                onSelect={() => {
                  handleTabSelect(1);
                }}
                isSelected={selectedTab === 1}
              />
              <SlideButton
                text="전체 계좌"
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
            <CustomerContainer>
              <CustomerInfoContainer customer={rowData} />
              <CustomerProfitContainer></CustomerProfitContainer>
            </CustomerContainer>

            <PortfolioContainer ref={customerRef}>
              <Portfolio></Portfolio>
              <Profit></Profit>
            </PortfolioContainer>

            <AllAccount ref={allAccountRef}></AllAccount>
            <Balance ref={balanceRef}></Balance>
          </BackgroundImage>
        </MainContainer>
      </Container>
    </>
  );
};
export default Management;
