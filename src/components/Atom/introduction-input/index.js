// components/Atom/introduction-input/index.js

import React, { useState } from "react";

const AtomIntroductionInput = ({ onSubmit }) => {
	const [introduction, setIntroduction] = useState('');

	const handleIntroductionChange = (e) => {
		setIntroduction(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// onSubmit 함수를 호출하여 입력된 자기소개를 전달합니다.
		onSubmit({ introduction });
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

