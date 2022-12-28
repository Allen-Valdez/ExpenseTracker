import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
	const getDay = date.toLocaleString('en-US', { day: 'numeric' });
	const getMonth = date.toLocaleString('en-US', { month: 'long' });
	const getYear = date.getFullYear();
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{getMonth}</div>
			<div className='expense-date__day'>{getDay}</div>
			<div className='expense-date__year'>{getYear}</div>
		</div>
	);
};

export default ExpenseDate;
