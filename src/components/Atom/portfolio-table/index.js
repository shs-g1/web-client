// components/Atom/portfolio-tables/index.js

import React from "react";

const AtomPortfolioTable = ({ portfolioData }) => {

	const tableData = {
		labels: portfolioData.labels,
		productName: portfolioData.productName,
		accumROR: portfolioData.accumROR,
		duration: portfolioData.duration,
		ratio: portfolioData.ratio,
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>자산 유형</th>
						<th>상품 명</th>
						<th>누적 수익률</th>
						<th>운용 기간</th>
						<th>투자 비율</th>
					</tr>
				</thead>
				<tbody>
					{tableData.labels.map((label, index) => (
						<tr key={index}>
							<td>{label}</td>
							<td>{tableData.productName[index]}</td>
							<td>{tableData.accumROR[index]}%</td>
							<td>{tableData.duration[index]}</td>
							<td>{tableData.ratio[index]}%</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AtomPortfolioTable;