// components/Organism/contatc/index.js

import React, { useEffect, useState } from "react";
import MoleculeContact from "../../Molecule/contact";
import AtomProfileImage from "../../Atom/profile-image";
import PBProfile from "../../../assets/images/pbProfile.png";
import { Container } from "./styled";


const OrganismContact = () => {
  //   const [imageUrl, setImageUrl] = useState(
  //     process.env.PUBLIC_URL + "/images/sol.jpeg"
  //   );

  //   useEffect(() => {
  //     fetch("api/imageUrl")
  //       .then((response) => response.json())
  //       .then((result) => setImageUrl(result))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);

  return (
    <Container>
      <AtomProfileImage imageUrl={PBProfile} />
      <MoleculeContact />
    </Container>
  );
};

export default OrganismContact;
