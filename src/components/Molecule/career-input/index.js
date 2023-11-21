// components/Molecule/career-input/index.js

import React, { useState } from "react";
import AtomPartInput from "../../Atom/part-input";

const MoleculeCareerInput = ({ onUpdate, attribute }) => {
	const [careerHistory, setCareerHistory] = useState([
		{
			company: '',
			department: '',
			startDate: '',
			endDate: '',
		},
	]);

	const handleInputChange = (index, field, newValue) => {	// 각 입력창(Company, Department, Start Date, End Date)에 입력 시 호출
		const updatedCareerHistory = [...careerHistory];
		updatedCareerHistory[index][field] = newValue;
		setCareerHistory(updatedCareerHistory);	// careerHistory 상태 업데이트
	};

	const handleSaveCareer = () => {	// 경력 저장하기 버튼 누르면 호출, 외부 컴포넌트로 carrerHistory를 넘겨준다.
		onUpdate(attribute, careerHistory);
	}

	const handleAddCareer = () => {	// Add career 버튼을 누르면 호출
		setCareerHistory([...careerHistory, { company: '', department: '', startDate: '', endDate: '' }]);
	};

	const handleRemoveCareer = (index) => {	// Remove 버튼을 누르면 호출
		const updatedCareerHistory = [...careerHistory];
		updatedCareerHistory.splice(index, 1);
		setCareerHistory(updatedCareerHistory);
	};

	return (
		<div>
			{careerHistory.map((career, index) => (
				<div key={index}>
					<AtomPartInput
						placeholder="Company"
						value={career.company}
						onChange={(value) => handleInputChange(index, 'company', value)}
					/>
					<AtomPartInput
						placeholder="Department"
						value={career.department}
						onChange={(value) => handleInputChange(index, 'department', value)}
					/>
					<AtomPartInput
						placeholder="Start Date"
						value={career.startDate}
						onChange={(value) => handleInputChange(index, 'startDate', value)}
					/>
					<AtomPartInput
						placeholder="End Date"
						value={career.endDate}
						onChange={(value) => handleInputChange(index, 'endDate', value)}
					/>
					<button onClick={() => handleRemoveCareer(index)}>Remove</button>
				</div>
			))}
			<button onClick={handleAddCareer}>Add Career</button>
			<button onClick={handleSaveCareer}>경력 저장하기</button>
		</div>
	);
};

export default MoleculeCareerInput;