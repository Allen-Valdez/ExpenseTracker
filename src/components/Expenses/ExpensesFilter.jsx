import './ExpensesFilter.css';

const ExpensesFilter = ({ onExpenseFilterChanged, yearSelected }) => {
	const filteredYear = e => {
		const { value } = e.target;
		console.log(value);
		onExpenseFilterChanged(value);
	};

	console.log(yearSelected);

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={yearSelected} onChange={filteredYear}>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
