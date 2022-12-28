import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancelExpense }) => {
	const defaultFormData = {
		title: '',
		amount: '',
		date: '',
	};
	const [expenseFormData, setExpenseFormData] = useState(defaultFormData);
	const [renderedDate, setRenderedDate] = useState('');

	const { title, amount, date } = expenseFormData;

	const onExpenseFormChange = e => {
		console.log(e.target.value);
		const { name, value } = e.target;
		if (name === 'date') {
			setRenderedDate(value);
		}
		// When setting the expense form data, I want to check if its the date and then create a new instance of that date
		setExpenseFormData(prevState => (name === 'date' ? { ...prevState, date: new Date(value + 'T00:00') } : { ...prevState, [name]: value }));
	};

	const onSubmitExpenseForm = e => {
		e.preventDefault();
		onSaveExpenseData(expenseFormData);
    resetFormData();
	};

	const resetFormData = () => {
		setExpenseFormData(defaultFormData);
	};

	console.log(date.toLocaleString().toString());

	return (
		<form onSubmit={onSubmitExpenseForm}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={onExpenseFormChange} name='title' value={title} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={onExpenseFormChange} name='amount' value={amount} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2020-01-01' max='2023-12-31' onChange={onExpenseFormChange} name='date' value={renderedDate} />
				</div>
			</div>
			<button onClick={onCancelExpense}>Cancel</button>
			<button type='submit'>Add Expense</button>
		</form>
	);
};

export default ExpenseForm;
