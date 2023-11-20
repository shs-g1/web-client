// components/Atom/plain-input/index.js

import React, { useState } from 'react';

const AtomPlainInput = ({ title, placeholder, onUpdate, attribute }) => {

	const [inputText, setInputText] = useState('');

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setInputText(newValue);
		onUpdate(attribute, newValue)
	};

	return (
		<div>
			{/* 입력값을 표시하는 부분 */}
			<p>{title}</p>

			{/* 실제 입력창 */}
			<input
				type="text"
				value={inputText}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>
		</div>
	);


};

export default AtomPlainInput;