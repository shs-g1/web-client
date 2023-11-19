// components/Atom/pb-portfolio-table/index.js
// 고객에게 보여지는 페이지에서 바로 노출되는 포트폴리오 3개의 리스트

import React from "react";

const AtomPBPortfolioTable = ({ title, content, onRowClick }) => {

	const tableData = {
		portfolioNames: content.portfolioNames,	// 이름
		principals: content.principals,	// 투자원금
		returns: content.returns,	// 투자수익률
		MDDs: content.MDDs,	// MDD
		cumulativeRORs: content.cumulativeRORs,	// 누적수익률
		durations: content.durations	// 기간
	};

	return (
		<div>
			<h2>{title}</h2>
			<table>
				<thead>
					<tr>
						<th>이름</th>
						<th>투자원금</th>
						<th>투자수익</th>
						<th>MDD</th>
						<th>누적수익률</th>
						<th>기간</th>
					</tr>
				</thead>
				<tbody>
					{tableData.portfolioNames.map((portfolioName, index) => (
						<tr key={index} onClick={() => onRowClick(tableData, index)}>
							<td>{portfolioName}</td>
							<td>{tableData.principals[index]}원</td>
							<td>{tableData.returns[index]}원</td>
							<td>{tableData.MDDs[index]}%</td>
							<td>{tableData.cumulativeRORs[index]}%</td>
							<td>{tableData.durations[index]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AtomPBPortfolioTable;