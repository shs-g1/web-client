// components/Molecule/portfolio/index.js

import React, { useState, useEffect } from "react";
import AtomDoughnutChart from "../../Atom/portfolio-chart";
import AtomPortfolioTable from "../../Atom/portfolio-table";


const MoleculePortfolio = ({ title }) => {
	// title = 포트폴리오
	const [portfolioData, setPortfolioData] = useState({
		labels: ['국내채권', '해외채권', '해외선물', '국내주식'],
		productName: ['상품1', '상품2', '상품3', '상품4'],
		accumROR: [1062.5, 235.8, 230.6, 684.5],
		duration: ['10년 2개월', '5년 2개월', '10년 2개월', '8년 3개월'],
		ratio: [25, 25, 25, 25],  // default value	
	});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("api/portfolio") // TODO: api 호출
			.then((response) => response.json())
			.then((result) => {
				setPortfolioData(result);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<p>로딩 중...</p>
		)
	}

	return (
		<div>
			<AtomDoughnutChart title={title} portfolioData={portfolioData} />
			<AtomPortfolioTable portfolioData={portfolioData} />
		</div>
	);
};

export default MoleculePortfolio;