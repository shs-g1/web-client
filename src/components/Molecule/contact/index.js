// components/Molecule/contact/index.js

import React, { useEffect, useState } from "react";
import AtomContact from "../../Atom/contact";
import { Container, Title, GreyTitle } from "./styled";

const MoleculeContact = () => {
  const [contacts, setContacts] = useState({
    tel: "010-1234-5678",
    email: "101chimee@gmail.com",
    current: "신한투자증권 여의도영업부",
    address: "서울 영등포구 의사당대로 82-1234-5678",
  });

  useEffect(() => {
    fetch("api/contacts")
      .then((response) => response.json())
      .then((result) => setContacts(result))
      .catch((error) => console.error("Error fetching data :", error));
  }, []);

  return (
    <Container>
      <Title>CONTACT</Title>
      <AtomContact contact={contacts.tel}></AtomContact>
      <AtomContact contact={contacts.email}></AtomContact>
      <AtomContact contact={contacts.current}></AtomContact>
      <GreyTitle>{contacts.address}</GreyTitle>
    </Container>
  );
};

export default MoleculeContact;
