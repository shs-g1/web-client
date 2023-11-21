// components/Molecule/name/index.js

import React, { useEffect, useState } from "react";
import AtomName from "../../Atom/name/index.js";
import { MoleculeNameContainer, Text } from "./styled";

const MolculeName = () => {
  const [fullName, setFullname] = useState("SOL");

  useEffect(() => {
    fetch("api/name") // TODO : api 호출
      .then((response) => response.json())
      .then((result) => setFullname(result))
      .catch((error) =>
        console.error("Error fetching introduction data:", error)
      );
  }, []);

  // TODO: 고객문구 지속적으로 변경하는 함수 추가
  return (
    <MoleculeNameContainer>
      <Text>진심으로 고객을 위하는</Text>
      <AtomName fullName={"PB " + fullName} />
    </MoleculeNameContainer>
  );
};

export default MolculeName;
