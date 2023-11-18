// components/Atom/portfolio-chart/index.js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const AtomDoughnutChart = ({ title, portfolioData }) => {

	const data = {
		labels: portfolioData.labels,
		datasets: [{
			data: portfolioData.ratio,
			backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
		}]
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
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default AtomDoughnutChart;