// components/Molecule/pb-portfolio-list/index.js
// 모달을 위한 컴포넌트
import { useState, useEffect } from "react";
import AtomPBPortfolioTable from "../../Atom/pb-portfolio-table";
import MoleculePBPortfolioModal from "../pb-portfolio-modal";

const MoleculePBPortfolioList = ({ title }) => {

	const [portfolioListData, setPortfolioListData] = useState({
		portfolioNames: ['자문사 펀드1', '자문사 펀드2', '자문사 펀드3'],	// 이름
		principals: [1000000, 1000000, 1000000],	// 투자원금
		returns: [1602346, 1602346, 1602346],	// 투자수익
		MDDs: [-11, -11, -11],	// MDD , fetch 안 함
		cumulativeRORs: [1025.25, 1025.25, 200],	// 누적수익률
		durations: ['2013.10.11~2023.05.23', '2013.10.11~2023.05.23', '2013.10.11~2023.05.23']	// 기간
	});

	const [selectedRow, setSelectedRow] = useState(null);

	const handleRowClick = (data, index) => {
		setSelectedRow({ data, index });
	};

	useEffect(() => {
		// TODO: fetch로 포트폴리오 리스트 불러오기
		fetch("api/portfolios/")
			.then((response) => response.json())
			.then((result) => setPortfolioListData(result))
			.catch((error) => console.error('Error fetching experience data:', error));
	}, []);

	return (
		<div>
			<AtomPBPortfolioTable
				title={title}
				content={portfolioListData}
				onRowClick={handleRowClick}
			/>
			{selectedRow && (
				<MoleculePBPortfolioModal
					rowData={selectedRow.data}	// TODO: index에 따라서 특정 포트폴리오 선택하기
					onClose={() => setSelectedRow(null)}
				/>
			)}
		</div>
	);
};

export default MoleculePBPortfolioList;