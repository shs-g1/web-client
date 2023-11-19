// components/Atom/pb-portfolio-table-modal/index.js

import React from "react";

const AtomPBPortfolioTableModal = ({ portfolioData }) => {

	const tableData = {
		labels: portfolioData.labels,
		productNames: portfolioData.productNames,
		accumRORs: portfolioData.accumRORs,
		durations: portfolioData.durations,
		ratios: portfolioData.ratios,
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
							<td>{tableData.productNames[index]}</td>
							<td>{tableData.accumRORs[index]}%</td>
							<td>{tableData.durations[index]}</td>
							<td>{tableData.ratios[index]}%</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AtomPBPortfolioTableModal;