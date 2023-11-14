// components/Molecule/specialization/index.js

import React from "react";
import AtomSpecialization from "../../Atom/specialization";

const MolculeSpecialization = () => {
    const specialization = ['#해외주식', '#전문분야', '#부동산'] // TODO : HTTP 요청으로 전문분야 불러오기, 지금은 MOCK_data

    return (
        <div>
            {specialization.map((spec, index) => (
                <AtomSpecialization key={index} text={spec}/>
            ))}
        </div>
    )
}

export default MolculeSpecialization