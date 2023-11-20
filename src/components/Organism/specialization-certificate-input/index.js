// components/Organism/specialization-certifiacate-input/index.js

import React from "react";
import AtomSpecializationInput from "../../Atom/specialization-input";
import MoleculeCertificateInput from "../../Molecule/certificate-input";

const MoleculeSpecializationCertificateInput = () => {
	return (
		<div>
			<AtomSpecializationInput />
			<MoleculeCertificateInput />
		</div>
	)
}

export default MoleculeSpecializationCertificateInput;