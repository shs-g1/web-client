// components/Molecule/contact/index.js

import React, { useEffect, useState} from "react";
import AtomContact from "../../Atom/contact";

const MoleculeContact = () => {
	const [contacts, setContacts] = useState({
		tel: '010-1234-5678',
		email: '101chimee@gmail.com',
		current: '신한투자증권 여의도영업부',
	});

	useEffect(() => {
		fetch("api/contacts")
		.then((response) => response.json())
		.then((result) => setContacts(result))
		.catch((error) => console.error("Error fetching data :", error));
	}, []);

	return (
		<div>
			<h1>Contact</h1>
			<AtomContact contact={contacts.tel}></AtomContact>
			<AtomContact contact={contacts.email}></AtomContact>
			<AtomContact contact={contacts.current}></AtomContact>
		</div>

	)
};

export default MoleculeContact;