import React, { useState } from "react";
import { Container } from "./styled";
import { Header } from "../../components/index";
import AtomPlainInput from "../../components/Atom/plain-input";
import AtomImageInput from "../../components/Atom/image-input";
import AtomEmailInput from "../../components/Atom/email-input";
import MoleculeCareerDurationInput from "../../components/Molecule/career-duration-input";
import MoleculeCareerListInput from "../../components/Molecule/career-list-input";
import MoleculeEducationDurationInput from "../../components/Molecule/education-duration-input";
import MoleculeEduactionListInput from "../../components/Molecule/education-list-input";
import MoleculeSpecializationCertificateInput from "../../components/Organism/specialization-certificate-input";
import AtomIntroductionInput from "../../components/Atom/introduction-input";

const Mypage = () => {

  const [formState, setFormState] = useState({
    name: '',
    phoneNumber: '',
    imageUrl: '',
    email: '',
    careerList: [],
    educationList: [],
    specialization: [],
    certificates: [],
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
      <AtomImageInput onUpdate={handleInputChange} attribute={'imageUrl'} />
      <AtomEmailInput onUpdate={handleInputChange} attribute={'email'} />
      <MoleculeCareerListInput title='경력' onUpdate={handleInputChange} />
      <MoleculeCareerDurationInput title='근무 기간' onUpdate={handleInputChange} />
      <MoleculeEduactionListInput title='학력' onUpdate={handleInputChange} />
      <MoleculeEducationDurationInput title='기간' onUpdate={handleInputChange} />
      <MoleculeSpecializationCertificateInput onUpdate={handleInputChange} />
      <AtomIntroductionInput onUpdate={handleInputChange} />
      <button onClick={handleFormSubmit}>수정하기</button>
    </Container>
  );

  // TODO : 컴포넌트 grouping
};
export default Mypage;
