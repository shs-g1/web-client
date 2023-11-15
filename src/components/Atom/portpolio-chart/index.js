// components/Atom/portpolio-chart/index.js
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const AtomDoughnutChart = ({ title }) => {
	const [chartData, setChartData] = useState({
		labels: ['국내채권', '해외채권', '해외선물', '국내주식'],
		datasets: [{
			data: [25, 25, 25, 25],
			backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
		}]
	});

	useEffect(() => {
		fetch("api/portpolio")
			.then((response) => response.json())
			.then((result) => setChartData(result))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	if (!chartData.labels || !chartData.datasets[0].data || !chartData.datasets[0].backgroundColor) {
		// 데이터가 도착하지 않았을 때 로딩 상태를 보여줄 수 있습니다.
		return <p>Loading...</p>;
	}

	const data = {
		labels: chartData.labels,
		datasets: [
			{
				data: chartData.datasets[0].data,
				backgroundColor: chartData.datasets[0].backgroundColor
			}
		]
	};

	const options = {
		cutoutPercentage: 60,
		legend: {
			position: 'right'
		}
	};

	return (
		<div>
			<h2>{title}</h2>
			<Doughnut data={data} options={options} />;
		</div>
	)
};

export default AtomDoughnutChart;