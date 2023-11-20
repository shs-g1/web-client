// components/Moldecule/certificate-input/index.js

import AtomCalendarInput from "../../Atom/calendar-input";
import AtomPlainInput from "../../Atom/plain-input";

const MoleculeCertificateInput = () => {
	return (
		<div>
			<AtomPlainInput placeholder='자격증' />
			<AtomPlainInput placeholder='발행처' />
			<AtomCalendarInput />
		</div>
	)
}

export default MoleculeCertificateInput;