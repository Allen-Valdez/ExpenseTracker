import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
	const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
	const totalMax = Math.max(...dataPointValues);
	return (
		<div className='chart'>
			{dataPoints.map(dataPoint => {
				return <ChartBar dataPoint={dataPoint} maxValue={totalMax} />;
			})}
		</div>
	);
};

export default Chart;
