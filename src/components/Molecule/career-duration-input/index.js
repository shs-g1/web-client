// components/Molecule/career-duration-input/index.js

import React from "react";
import AtomPlainInput from "../../Atom/plain-input";

const MoleculeCareerDurationInput = ({ title }) => {
	return (
		<div>
			<p>{title}</p>
			<AtomPlainInput />
			~
			<AtomPlainInput />
		</div >
	)
}

export default MoleculeCareerDurationInput;