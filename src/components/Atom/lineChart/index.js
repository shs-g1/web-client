import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

const LineChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      Chart.register(
        LineController,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement
      );
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
          datasets: [
            {
              label: "종합 계좌",
              data: [0, 20, 30, 40, 50, 60],
              borderColor: "#165BAA",
              pointRadius: 5, // 포인트 크기
              pointBackgroundColor: "#165BAA", // 포인트 배경색
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 7, // 호버 시 포인트 크기
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
            },
            {
              label: "CMA 계좌",
              data: [20, 30, 50, 20, 10, 10],
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 5, // 포인트 크기
              pointBackgroundColor: "rgba(255, 99, 132, 1)", // 포인트 배경색
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 7, // 호버 시 포인트 크기
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
            },
            {
              label: "CMA 계좌",
              data: [25, 10, 18, 20, -19, 0],
              borderColor: "#A155B9",
              pointRadius: 5, // 포인트 크기
              pointBackgroundColor: "#A155B9", // 포인트 배경색
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 7, // 호버 시 포인트 크기
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: true,
            },
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };

    const initializeChart = () => {
      destroyChart(); // 이전 차트 파괴
      createChart(); // 새로운 차트 생성
    };

    // 컴포넌트가 처음 렌더링될 때 차트 초기화
    initializeChart();

    // 컴포넌트가 unmount될 때 차트 파괴
    return () => {
      destroyChart();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
