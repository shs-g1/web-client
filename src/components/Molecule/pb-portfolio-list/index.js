// components/Molecule/pb-portfolio-list/index.js
// 모달을 위한 컴포넌트
import { useState, useEffect } from "react";
import AtomPBPortfolioTable from "../../Atom/pb-portfolio-table";
import MoleculePBPortfolioModal from "../pb-portfolio-modal";

const MoleculePBPortfolioList = (props) => {

	const [selectedRow, setSelectedRow] = useState(null);

	const handleRowClick = (data, index) => {
		setSelectedRow({ data, index });
	};

	return (
		<div>
			<AtomPBPortfolioTable
				title={props.title}
				content={props.portfolioList}
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