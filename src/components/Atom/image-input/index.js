// component/Atom/image-input/index.js

import React, { useState } from 'react';
import ImageContainer from './styled';

const AtomImageInput = ({ onUpdate, attribute }) => {

	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];	// files(목록)중 첫번째 파일
		setSelectedImage(file);	// 선택된 파일을 상태에 저장

		const reader = new FileReader();
		reader.onload = (event) => { // event => 파일 읽는 이벤트, onload로 이벤트 핸들러 설정
			const base64String = event.target.result;
			onUpdate(attribute, base64String);
		};

		// 파일을 읽고 Base64로 인코딩 => event 발생하면 위의 onload의 핸들러가 호출이된다.
		reader.readAsDataURL(file);
	};

	return (
		<div>
			<p>대표 이미지</p>
			{/* 이미지를 표시하는 부분 */}
			<ImageContainer>
				{selectedImage && (
					<div>
						<img
							src={URL.createObjectURL(selectedImage)}	// 이미지 미리보기
							alt="Selected"
							style={{ maxWidth: '300px' }}
						/>
					</div>
				)}
			</ImageContainer>

			{/* 파일 선택을 위한 파일 입력창 */}
			<input
				type="file"
				accept="image/*"  // 이미지 파일만 선택 가능하도록 설정
				onChange={handleImageChange}
			/>
		</div>
	);
};

export default AtomImageInput;
