// components/Molecule/career-list-input/index.js

import React from "react";
import AtomPlainInput from "../../Atom/plain-input";

// title = 경력
const MoleculeCareerListInput = ({ title }) => {
	return (
		<div>
			<p>{title}</p>
			<AtomPlainInput placeholder={'회사'} />
			<AtomPlainInput placeholder={'부서'} />
		</div >
	)
}

export default MoleculeCareerListInput;