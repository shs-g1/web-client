import { Container } from "../Login/styled";
import MolculeSpecialization from "../../components/Molecule/specialization/index.js"
import MolculeName from "../../components/Molecule/name/index.js"

const Client = () => {
	return (
		<Container>
			<MolculeName/>
			<MolculeSpecialization/>
		</Container>
	);
};
export default Client;