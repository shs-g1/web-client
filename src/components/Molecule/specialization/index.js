// components/Molecule/specialization/index.js

import React, { useEffect, useState } from "react";
import AtomSpecialization from "../../Atom/specialization";

const MolculeSpecialization = () => {
    const [specialization, setSpecialization] = useState(['#해외주식', '#전문분야', '#부동산']); // Default 전문분야

    useEffect(() => { // TODO: 비동기 api 호출
        fetch("api/specializations")
            .then((response) => response.json())
            .then((result) => setSpecialization(result))
            .catch((error) => console.error('Error fetching introduction data:', error))
    }, []);

    return (
        <div>
            {specialization.map((spec, index) => (
                <AtomSpecialization key={index} text={spec} />
            ))}
        </div>
    )
}

export default MolculeSpecialization