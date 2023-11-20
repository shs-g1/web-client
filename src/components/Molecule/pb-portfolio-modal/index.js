// components/Molecule/pb-portfolio-modal/index.js

import React, { useState, useEffect } from "react";
import AtomPBPortfolioDoughnutChartModal from "../../Atom/pb-portfolio-chart-modal";
import AtomPBPortfolioTableModal from "../../Atom/pb-portfolio-table-modal";
import Modal from "react-modal";
import styled from "styled-components";

export const Button = styled.button`
  font-size: 15px;
  border: none;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const MoleculePBPortfolioModal = ({ rowData, onClose }) => {
  const title = "구성"; // 포트폴리오 구성
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [portfolioData, setPortfolioData] = useState({
    labels: ["국내채권", "해외채권", "해외선물", "국내주식"],
    productNames: ["상품1", "상품2", "상품3", "상품4"],
    accumRORs: [1062.5, 235.8, 230.6, 684.5],
    durations: ["10년 2개월", "5년 2개월", "10년 2개월", "8년 3개월"],
    ratios: [25, 25, 25, 25], // default value
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
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [rowData]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      contentLabel="포트폴리오 상세"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          width: "100%",
          maxWidth: "300px",
          height: "650px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <AtomPBPortfolioDoughnutChartModal
        title={title}
        portfolioData={portfolioData}
      />
      <AtomPBPortfolioTableModal portfolioData={portfolioData} />
      <Footer>
        <Button></Button>
        <Button onClick={onClose}>닫기</Button>
      </Footer>
    </Modal>
  );
};

export default MoleculePBPortfolioModal;
