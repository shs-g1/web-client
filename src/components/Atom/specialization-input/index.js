// components/Atom/specialization-input/index.js

import React, { useState } from "react";

const AtomSpecializationInput = () => {
	const [selectedHashtags, setSelectedHashtags] = useState([]);

	const toggleHashtag = (hashtag) => {
		if (selectedHashtags.includes(hashtag)) {
			setSelectedHashtags(selectedHashtags.filter(tag => tag !== hashtag));
		} else {
			setSelectedHashtags([...selectedHashtags, hashtag]);
		}
	};

	return (
		<div>
			<h2>전문 분야 선택</h2>
			<p>(최대 3개까지 선택해주세요.)</p>
			<div className="hashtag-container">
				<button
					className={`hashtag-button ${selectedHashtags.includes('tag1') && 'selected'}`}
					onClick={() => toggleHashtag('금융상품')}
				>
					금융상품
				</button>
				<button
					className={`hashtag-button ${selectedHashtags.includes('tag2') && 'selected'}`}
					onClick={() => toggleHashtag('국내주식')}
				>
					국내주식
				</button>
				<button
					className={`hashtag-button ${selectedHashtags.includes('tag3') && 'selected'}`}
					onClick={() => toggleHashtag('해외주식')}
				>
					해외주식
				</button>
				<button
					className={`hashtag-button ${selectedHashtags.includes('tag3') && 'selected'}`}
					onClick={() => toggleHashtag('은퇴관리')}
				>
					은퇴관리
				</button>
				{/* 추가적인 해시태그 버튼 추가. */}
			</div>
			<p>선택된 해시태그: {selectedHashtags.join(', ')}</p>
			{/* 추가적인 해시태그 버튼 추가. 담는 목록 추가 */}
		</div>
	);
}

export default AtomSpecializationInput;

