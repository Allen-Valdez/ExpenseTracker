import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses }) => {
	if (filteredExpenses.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found...</h2>;
	}
	return (
		<ul className='expenses-list'>
			{filteredExpenses.map(expenseItem => {
				const { id } = expenseItem;
				return (
					<div key={id}>
						<ExpenseItem expenseItem={expenseItem} />
					</div>
				);
			})}
		</ul>
	);
};

export default ExpensesList;
