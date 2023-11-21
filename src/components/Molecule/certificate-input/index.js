// components/Moldecule/certificate-input/index.js

import React, { useState } from "react";
import AtomPartInput from "../../Atom/part-input";
import AtomCalendarInput from "../../Atom/calendar-input";
import { CertificateContainer } from "./styled";

const MoleculeCertificateInput = ({ onUpdate, attribute }) => {
	const [certificateHistory, setcertificateHistory] = useState([
		{
			certificateName: '',
			certificateIssuer: '',
			acquisitionDate: '',
		},
	]);

	const handleInputChange = (index, field, newValue) => {	// 각 입력창(자격증 명, 발행 처, 취득 일자)가 변경 시 호출
		const updatedCertificateHistory = [...certificateHistory];

		// Convert Date object to string in ISO format
		if (field === 'acquisitionDate' && newValue instanceof Date) {
			// Extract the date part without the time
			newValue = newValue.toISOString().split('T')[0];
		}

		updatedCertificateHistory[index][field] = newValue;
		setcertificateHistory(updatedCertificateHistory);	// certificateHistory 상태 업데이트
	};

	const handleSaveCareer = () => {	// 자격 사항 저장하기 버튼 누르면 호출, 외부 컴포넌트로 certificateHistory 넘겨준다.
		onUpdate(attribute, certificateHistory);
	}

	const handleAddCareer = () => {	// Add certificate 버튼을 누르면 호출
		setcertificateHistory([...certificateHistory, { certificateName: '', certificateIssuer: '', acquisitionDate: '' }]);
	};

	const handleRemoveCareer = (index) => {	// Remove 버튼을 누르면 호출
		const updatedCertificateHistory = [...certificateHistory];
		updatedCertificateHistory.splice(index, 1);
		setcertificateHistory(updatedCertificateHistory);
	};

	return (
		<div>
			{certificateHistory.map((certificate, index) => (
				<CertificateContainer key={index}>
					<AtomPartInput
						placeholder="자격증 명"
						value={certificate.certificateName}
						onChange={(value) => handleInputChange(index, 'certificateName', value)}
					/>
					<AtomPartInput
						placeholder="발행처"
						value={certificate.certificateIssuer}
						onChange={(value) => handleInputChange(index, 'certificateIssuer', value)}
					/>
					<AtomCalendarInput
						value={certificate.acquisitionDate}
						onChange={(value) => handleInputChange(index, 'acquisitionDate', value)}
					/>
					<button onClick={() => handleRemoveCareer(index)}>Remove</button>
				</CertificateContainer>
			))}
			<button onClick={handleAddCareer}>Add Certifiacte</button>
			<button onClick={handleSaveCareer}>자격 사항 저장하기</button>
		</div>
	)
}

export default MoleculeCertificateInput;