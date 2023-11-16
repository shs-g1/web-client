import { Container } from "../Login/styled";
import MolculeSpecialization from "../../components/Molecule/specialization/index.js"
import MolculeName from "../../components/Molecule/name/index.js"
import AtomProfileImage from "../../components/Atom/profile-image/index.js";
import MoleculeContact from "../../components/Molecule/contact/index.js";
import MoleculeCumulativeStats from "../../components/Molecule/cumulativestats/index.js";
import OrganismProfileSection from "../../components/Organism/profile-section/index.js";

const Client = () => {
	const imageUrl = process.env.PUBLIC_URL + "/images/sol.jpeg";

	return (
		<Container>
			<MolculeName />
			<MoleculeContact />
			<MoleculeCumulativeStats />
			<AtomProfileImage imageUrl={imageUrl} />
			<MolculeSpecialization />
			<OrganismProfileSection />
		</Container>
	);
};
export default Client;