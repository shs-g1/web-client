// components/Molecule/name/index.js

import React, { useEffect, useState } from "react";
import AtomName from "../../Atom/name/index.js"
import { MoleculeNameContainer } from "./styled";

const MolculeName = () => {
    const [fullName, setFullname] = useState('홍박사');

    useEffect(() =>
        fetch("api/name") // TODO : api 호출
        .then((response) => response.json())
        .then((result) => setFullname(result))
        .catch((error) => console.error('Error fetching introduction data:', error))
    );

    // TODO: 고객문구 지속적으로 변경
    return (
        <MoleculeNameContainer>
            진심으로 고객을 위하는 PB<AtomName fullName={fullName} /> 입니다. 
        </MoleculeNameContainer>
    )
}

export default MolculeName