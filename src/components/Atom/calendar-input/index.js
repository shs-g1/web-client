// components/Atom/calendar-input/index.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const AtomCalendarInput = ({ value, onChange }) => {

	const [selectedDate, setSelectedDate] = useState(value || '');	//	props로 넘어온 value를 초기값(공백)으로 할당

	const handleDateChange = (date) => {
		setSelectedDate(date);
		onChange(date);
	};

	return (
		<div>
			<h2>날짜 선택</h2>
			<DatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				dateFormat="yy-MM-dd"
				placeholderText="날짜를 선택하세요"
			/>
			{selectedDate && (
				<p>선택된 날짜: {selectedDate.toLocaleDateString('ko-KR')}</p>
			)}
		</div>
	);
}

export default AtomCalendarInput;