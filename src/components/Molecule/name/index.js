// components/Molecule/name/index.js

import React from "react";
import AtomName from "../../Atom/name/index.js"
import { MoleculeNameContainer } from "./styled";

const MolculeName = () => {
    const fullName = '홍박사' // TODO: 저장된 이름 불러오기

    return (
        <MoleculeNameContainer>
            안녕하세요<AtomName fullName={fullName} /> 반갑습니다.
        </MoleculeNameContainer>
    )
}

export default MolculeName