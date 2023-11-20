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
import { useState, useRef, useEffect } from "react";
import { instance } from "../../apis";

const Management = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(1);

  const customerRef = useRef(null);
  const allAccountRef = useRef(null);
  const balanceRef = useRef(null);

  /*get API */
  const [apiData, setApiData] = useState([]);

  const getListApi = async () => {
    try {
      const response = await instance.get("/customer");
      console.log(response.data, "responseData");
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListApi();
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts or when rowData changes
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <>
      <Header tab={2}></Header>
      <Container>
        <MainContainer>
          <BackgroundImage>
            <PageTitle
              // blueTItle={`${apiData.nameAndProfile[0]}` + " 고객님의"}
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
              <CustomerInfoContainer customer={apiData} />
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
