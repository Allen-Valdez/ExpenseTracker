import './ChartBar.css';
const ChartBar = ({ dataPoint, maxValue }) => {
	const { label, value } = dataPoint;
	let barFillerHeight = '0%';

	if (maxValue > 0) {
		barFillerHeight = Math.round((value / maxValue) * 100) + '%';
	}

	return (
		<div key={label} className='chart-bar'>
			<div className='chart-bar__inner'>
				<div className='chart-bar__fill' style={{ height: barFillerHeight }}></div>
			</div>
			<div className='chart-bar__label'>{label}</div>
		</div>
	);
};

export default ChartBar;
