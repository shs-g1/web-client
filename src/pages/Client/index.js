import { Container } from "./styled";
import MolculeName from "../../components/Molecule/name/index.js";
import OrganismContact from "../../components/Organism/contact/index.js";
import MolculeSpecialization from "../../components/Molecule/specialization/index.js";
import MoleculeCumulativeStats from "../../components/Molecule/cumulativestats/index.js";
import OrganismProfileSection from "../../components/Organism/profile-section/index.js";

const Client = () => {
  return (
    <Container>
      <MolculeName />
      <OrganismContact />
      <MolculeSpecialization />
      <MoleculeCumulativeStats />
      <OrganismProfileSection />
    </Container>
  );
};
export default Client;
