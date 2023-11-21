import React, { useState } from "react";
import { Header, SubTitle } from "../../components/index";
import { Container, BackgroundImage, FlexName } from "./styled";
import AtomPlainInput from "../../components/Atom/plain-input";
import AtomImageInput from "../../components/Atom/image-input";
import AtomEmailInput from "../../components/Atom/email-input";
import MoleculeCareerInput from "../../components/Molecule/career-input";
import MoleculeEducationInput from "../../components/Molecule/education-input";
import MoleculeCertificateInput from "../../components/Molecule/certificate-input";
import AtomIntroductionInput from "../../components/Atom/introduction-input";
import AtomSpecializationInput from "../../components/Atom/specialization-input";
import { MainContainer } from "../Main/styled";

import styled from "styled-components";

const SubmitButton = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 4px;
  background-color: #384a7d;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-bottom: 50px;
  &:active {
    transform: scale(0.95);
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Mypage = () => {
  const pbName = localStorage.getItem("pbName");
  const [formState, setFormState] = useState({
    name: "",
    phoneNumber: "",
    imageUrl: "",
    email: "",
    careerList: [],
    educationList: [],
    specializationList: [],
    certificateList: [],
    introduction: "",
  });

  const handleInputChange = (attribute, value) => {
    setFormState({
      ...formState,
      [attribute]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // console.log(formState.name); // DEBUG

    try {
      // TODO: 제출 url 변경
      const response = await fetch("http://localhost:8080/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        console.log("submit success");
      } else {
        console.error("폼 제출 중 오류 발생");
      }
    } catch (error) {
      console.error("통신 오류:", error);
    }
  };

  return (
    <>
      <Header tab={3} pbName={pbName}></Header>
      <Container>
        <MainContainer>
          <BackgroundImage>
            <SubTitle subTitle="개인정보"></SubTitle>
            <FlexName>
              <AtomPlainInput
                title={"이름"}
                placeholder={"이름"}
                required={true}
                width={"250px"}
                onUpdate={handleInputChange}
                attribute={"name"}
              />
              <AtomPlainInput
                title={"전화번호"}
                placeholder={"전화번호"}
                required={true}
                width={"310px"}
                onUpdate={handleInputChange}
                attribute={"phoneNumber"}
              />
            </FlexName>

            <AtomEmailInput
              onUpdate={handleInputChange}
              attribute={"email"}
              width={"250px"}
              required={true}
            />
            <AtomImageInput
              onUpdate={handleInputChange}
              attribute={"imageUrl"}
            />
            <MoleculeCareerInput
              onUpdate={handleInputChange}
              attribute={"careerList"}
              width1={"210px"}
              width2={"120px"}
              required={true}
            />
            <MoleculeEducationInput
              onUpdate={handleInputChange}
              attribute={"educationList"}
              width1={"210px"}
              width2={"120px"}
              required={true}
            />
          </BackgroundImage>

          <BackgroundImage>
            <SubTitle subTitle="전문 분야 및 자격 사항"></SubTitle>
            <AtomSpecializationInput
              onUpdate={handleInputChange}
              attribute={"specializationList"}
              required={true}
            />
            <MoleculeCertificateInput
              onUpdate={handleInputChange}
              attribute={"certificateList"}
            />
          </BackgroundImage>
          <BackgroundImage>
            <AtomIntroductionInput
              onUpdate={handleInputChange}
              attribute={"introduction"}
            />
          </BackgroundImage>

          <RightContainer>
            <SubmitButton onClick={handleFormSubmit}>수정</SubmitButton>
          </RightContainer>
        </MainContainer>
      </Container>
    </>
  );

  // TODO : 컴포넌트 grouping
};
export default Mypage;
