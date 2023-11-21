import React, { useState } from "react";
import { Container } from "./styled";
import { Header } from "../../components/index";
import AtomPlainInput from "../../components/Atom/plain-input";
import AtomImageInput from "../../components/Atom/image-input";
import AtomEmailInput from "../../components/Atom/email-input";
import MoleculeCareerInput from "../../components/Molecule/career-input";
import MoleculeEducationInput from "../../components/Molecule/education-input";
import MoleculeCertificateInput from "../../components/Molecule/certificate-input"
import AtomIntroductionInput from "../../components/Atom/introduction-input";
import AtomSpecializationInput from "../../components/Atom/specialization-input";

const Mypage = () => {

  const [formState, setFormState] = useState({
    name: '',
    phoneNumber: '',
    imageUrl: '',
    email: '',
    careerList: [],
    educationList: [],
    specializationList: [],
    certificateList: [],
    introduction: ''
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
      const response = await fetch("api/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        console.log('submit success');
      } else {
        console.error('폼 제출 중 오류 발생');
      }
    } catch (error) {
      console.error('통신 오류:', error);
    }
  };

  return (
    <Container>
      <Header tab={3}></Header>
      <AtomPlainInput title={'이름'} placeholder={'이름'} onUpdate={handleInputChange} attribute={'name'} />
      <AtomPlainInput title={'전화번호'} placeholder={'전화번호'} onUpdate={handleInputChange} attribute={'phoneNumber'} />
      <AtomEmailInput onUpdate={handleInputChange} attribute={'email'} />
      <AtomImageInput onUpdate={handleInputChange} attribute={'imageUrl'} />
      <MoleculeCareerInput onUpdate={handleInputChange} attribute={'careerList'} />
      <MoleculeEducationInput onUpdate={handleInputChange} attribute={'educationList'} />
      <AtomSpecializationInput onUpdate={handleInputChange} attribute={'specializationList'} />
      <MoleculeCertificateInput onUpdate={handleInputChange} attribute={'certificateList'} />
      <AtomIntroductionInput onUpdate={handleInputChange} attribute={'introduction'} />
      <button onClick={handleFormSubmit}>수정하기</button>
    </Container>
  );

  // TODO : 컴포넌트 grouping
};
export default Mypage;
