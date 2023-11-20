// components/Molecule/specialization/index.js

import React, { useEffect, useState } from "react";
import AtomSpecialization from "../../Atom/specialization";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: -10px;
`;
const MolculeSpecialization = () => {
  const [specialization, setSpecialization] = useState([
    "해외주식",
    "전문분야",
    "부동산",
  ]); // Default 전문분야

  useEffect(() => {
    // TODO: 비동기 api 호출
    fetch("api/specializations")
      .then((response) => response.json())
      .then((result) => setSpecialization(result))
      .catch((error) =>
        console.error("Error fetching introduction data:", error)
      );
  }, []);

  return (
    <Container>
      {specialization.map((spec, index) => (
        <AtomSpecialization key={index} text={spec} />
      ))}
    </Container>
  );
};

export default MolculeSpecialization;
