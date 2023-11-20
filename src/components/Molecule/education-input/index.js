//components/Molecule/education-input/index.js

import React, { useState } from "react";
import AtomPartInput from "../../Atom/part-input";

const MoleculeEducationInput = ({ onUpdate, attribute }) => {

	const [educationHistory, setEducationHistory] = useState([
		{
			school: '',	//	학교
			department: '',	//	학과
			startDate: '',	// 시작 날짜
			endDate: '',	// 종료 날짜
		}
	]);

	const handleInputChange = (index, attribute, newValue) => {	// 각 입력창(학교, 부서, 시작 날짜, 종료 날짜)에 입력 시 호출
		const updatedEducationoHistory = [...educationHistory];
		updatedEducationoHistory[index][attribute] = newValue;
		setEducationHistory(updatedEducationoHistory);	// EducationHistory 상태 업데이트
	};

	const handleSaveEducation = () => {	// 교육 저장하기 버튼 누르면 호출, 외부 컴포넌트로 educationHistory 넘겨준다.
		onUpdate(attribute, educationHistory);
	}

	const handleAddEducation = () => {	// Add education 버튼을 누르면 호출
		setEducationHistory([...educationHistory, { company: '', department: '', startDate: '', endDate: '' }]);
	};

	const handleRemoveEducation = (index) => {	// Remove 버튼을 누르면 호출
		const updatedEducationHistory = [...educationHistory];
		updatedEducationHistory.splice(index, 1);
		setEducationHistory(updatedEducationHistory);
	};

	return (
		<div>
			{educationHistory.map((education, index) => (
				<div key={index}>
					< AtomPartInput
						placeholder={'학교'}
						value={education.school}
						onChange={(value) => handleInputChange(index, 'school', value)}
					/>
					< AtomPartInput
						placeholder={'부서'}
						value={education.department}
						onChange={(value) => handleInputChange(index, 'department', value)}
					/>
					< AtomPartInput
						placeholder={'시작 날짜'}
						value={education.startDate}
						onChange={(value) => handleInputChange(index, 'startDate', value)}
					/>
					< AtomPartInput
						placeholder={'종료 날짜'}
						value={education.endDate}
						onChange={(value) => handleInputChange(index, 'endDate', value)}
					/>
					<button onClick={() => handleRemoveEducation(index)}>Remove</button>
				</div>
			))}
			<button onClick={handleAddEducation}>Add Education</button>
			<button onClick={handleSaveEducation}>교육 저장하기</button>
		</div>
	);
};

export default MoleculeEducationInput;