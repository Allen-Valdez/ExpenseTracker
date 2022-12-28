import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2022');
	const onExpenseFilterChanged = yearSelected => {
		setFilteredYear(yearSelected);
	};

	console.log(expenses);

	const filterExpensesByYear = expense => expense.date.getFullYear().toString() === filteredYear;
	const filteredExpenses = expenses.filter(filterExpensesByYear);

	return (
		<Card className='expenses'>
			<ExpensesFilter onExpenseFilterChanged={onExpenseFilterChanged} yearSelected={filteredYear} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
