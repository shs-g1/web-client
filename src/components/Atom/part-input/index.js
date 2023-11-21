// component/Atom/part-input/index.js

import React, { useState } from 'react';

const AtomPartInput = ({ placeholder, value, onChange }) => {
	const [inputText, setInputText] = useState(value || ''); // Set initial value if provided

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setInputText(newValue);
		onChange(newValue);
	};

	return (
		<input
			type="text"
			value={inputText}
			onChange={handleInputChange}
			placeholder={placeholder}
		/>
	);
};

export default AtomPartInput;