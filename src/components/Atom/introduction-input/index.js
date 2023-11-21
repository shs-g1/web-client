// components/Atom/introduction-input/index.js

import React, { useState } from "react";

const AtomIntroductionInput = ({ onUpdate, attribute }) => {
	const [introduction, setIntroduction] = useState('');

	const handleIntroductionChange = (e) => {
		setIntroduction(e.target.value);
	};

	const handleFormSubmit = (e) => {	// 저장 버튼을 누르면 form의 onSubmit으로 호출되는 함수
		e.preventDefault();
		onUpdate(attribute, introduction);
	};

	return (
		<div>
			<h2>자유롭게 해주세요</h2>
			<form onSubmit={handleFormSubmit}>
				<label>
					<textarea
						value={introduction}
						onChange={handleIntroductionChange}
						rows="4"
						cols="50"
					/>
				</label>
				<br />
				<button type="submit">저장</button>
			</form>
		</div>
	);
};

export default AtomIntroductionInput;

