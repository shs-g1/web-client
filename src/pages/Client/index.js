import { Container, PhoneSize } from "./styled";
import MolculeName from "../../components/Molecule/name/index.js";
import OrganismContact from "../../components/Organism/contact/index.js";
import MolculeSpecialization from "../../components/Molecule/specialization/index.js";
import MoleculeCumulativeStats from "../../components/Molecule/cumulativestats/index.js";
import OrganismProfileSection from "../../components/Organism/profile-section/index.js";
import { LoginHeader } from "../../components/index.js";

const Client = () => {
  return (
    <Container>
      <PhoneSize>
        <LoginHeader width={"100vw"} />
        <MolculeName />
        <OrganismContact />
        <MolculeSpecialization />
        <MoleculeCumulativeStats />
        <OrganismProfileSection />
      </PhoneSize>
    </Container>
  );
};
export default Client;
