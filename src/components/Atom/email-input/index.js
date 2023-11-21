// components/Atom/email-input/index.js

import React, { useState } from "react";
import {
  Container,
  FlexEmail,
  Text,
  Required,
  Input,
  Span,
  Div,
  Select,
  Option,
  SaveButton,
} from "./styled";
const AtomEmailInput = ({ onUpdate, attribute, width, required }) => {
  const [localPart, setLocalPart] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const domains = [
    "naver.com",
    "google.com",
    "hanmail.net",
    "nate.com",
    "kakao.com",
    "shinhan.com",
  ];
  const [isModalOpen, setModalOpen] = useState(false);

  // TODO: 저장 확인 모달창 구현
  const handleDomainChange = (e) => {
    const value = e.target.value; // select된 요소의 value
    // If the selected value is 'type', enable input and clear custom domain input
    if (value === "type") {
      setInputEnabled(true); // Assuming you have a state variable like inputEnabled
    } else {
      setInputEnabled(false);
    }

    setSelectedDomain(value);
    updateParentEmail();
  };

  const handleLocalPartChange = (e) => {
    setLocalPart(e.target.value);
    updateParentEmail();
  };

  const updateParentEmail = () => {
    const email = `${localPart}@${
      selectedDomain === "type" ? "" : selectedDomain
    }`;
    onUpdate(attribute, email);
    console.log(email);

    setModalOpen(true); // 저장되었다는 모달 열기
  };

  return (
    <Container>
      <FlexEmail>
        <Text>{required && <Required>*</Required>}이메일</Text>
        <Input
          className="box"
          type="text"
          placeholder="이메일"
          value={localPart}
          onChange={handleLocalPartChange}
        />
        <Span>@</Span>

        <Input
          className="box"
          type="text"

          value={selectedDomain === "type" ? localPart : `${selectedDomain}`}


          placeholder="도메인을 선택해주세요"
          disabled={!inputEnabled}
        />
      </FlexEmail>
      <Div>
        <Select
          className="box"
          onChange={handleDomainChange}
          value={selectedDomain}
        >
          <Option value="" disabled>
            도메인을 선택해주세요
          </Option>
          {domains.map((domain) => (
            <Option key={domain} value={domain}>
              {domain}
            </Option>
          ))}
          <Option value="type">직접 입력</Option>
        </Select>
      </Div>
      <SaveButton onClick={updateParentEmail}>임시 저장</SaveButton>
    </Container>
  );
};

export default AtomEmailInput;
