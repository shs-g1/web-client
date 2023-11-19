// components/Molecule/pb-portfolio-modal/index.js

import React, { useState, useEffect } from "react";
import AtomPBPortfolioDoughnutChartModal from "../../Atom/pb-portfolio-chart-modal";
import AtomPBPortfolioTableModal from "../../Atom/pb-portfolio-table-modal";


const MoleculePBPortfolioModal = ({ rowData, onClose }) => {
	const title = '구성'	// 포트폴리오 구성

	const [portfolioData, setPortfolioData] = useState({
		labels: ['국내채권', '해외채권', '해외선물', '국내주식'],
		productNames: ['상품1', '상품2', '상품3', '상품4'],
		accumRORs: [1062.5, 235.8, 230.6, 684.5],
		durations: ['10년 2개월', '5년 2개월', '10년 2개월', '8년 3개월'],
		ratios: [25, 25, 25, 25],  // default value	
	});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("api/portfolio/" + rowData) // TODO: api 호출, rowData(index)를 바탕으로 호출
			.then((response) => response.json())
			.then((result) => {
				setPortfolioData(result);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
	}, [rowData]);

	if (loading) {
		return (
			<p>로딩 중...</p>
		)
	}

	return (
		<div>
			<AtomPBPortfolioDoughnutChartModal title={title} portfolioData={portfolioData} />
			<AtomPBPortfolioTableModal portfolioData={portfolioData} />
			<button onClick={onClose}>닫기</button>
		</div>
	);
};

export default MoleculePBPortfolioModal;