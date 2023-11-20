// components/Atom/email-input/index.js

import React, { useState } from 'react';
import Modal from 'react-modal';

const AtomEmailInput = ({ onUpdate, attribute }) => {
	const [localPart, setLocalPart] = useState('');
	const [selectedDomain, setSelectedDomain] = useState('');
	const [inputEnabled, setInputEnabled] = useState(false);
	const domains = ['naver.com', 'google.com', 'hanmail.net', 'nate.com', 'kakao.com', 'shinhan.com'];
	const [isModalOpen, setModalOpen] = useState(false);

	// TODO: 직접 입력
	const handleDomainChange = (e) => {
		const value = e.target.value;	// select된 요소의 value
		// If the selected value is 'type', enable input and clear custom domain input
		if (value === 'type') {
			setInputEnabled(true); // Assuming you have a state variable like inputEnabled
		} else {
			setInputEnabled(false);
		}

		setSelectedDomain(value);
		updateParentEmail();
	};

	const handleLocalPartChange = (e) => {
		setLocalPart(e.target.value);
		updateParentEmail();
	};

	const updateParentEmail = () => {
		const email = `${localPart}@${selectedDomain === 'type' ? '' : selectedDomain}`;
		onUpdate(attribute, email);
		setModalOpen(true); // 저장되었다는 모달 열기
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<div>
				<input
					className="box"
					type="text"
					placeholder="이메일 주소를 입력하세요"
					value={selectedDomain === 'type' ? localPart : `${localPart}@${selectedDomain}`}
					disabled={!inputEnabled}
				/>
			</div>
			<div>
				<input
					className="box"
					type="text"
					placeholder="로컬 주소"
					value={localPart}
					onChange={handleLocalPartChange}
				/>
				<span>@</span>
				<select className="box" onChange={handleDomainChange} value={selectedDomain}>
					<option value="" disabled>Select a domain</option>
					{domains.map((domain) => (
						<option key={domain} value={domain}>
							{domain}
						</option>
					))}
					<option value="type">직접 입력</option>
				</select>
			</div>
			<button onClick={updateParentEmail}>저장하기</button>
		</div>
	);
};

export default AtomEmailInput;
