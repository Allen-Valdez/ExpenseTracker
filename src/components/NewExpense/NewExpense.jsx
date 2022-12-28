import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ addExpense }) => {
	const [isAddingExpense, setIsAddingExpense] = useState(false);

	const onSaveExpenseData = enteredExpenseData => {
		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		console.log('NEW EXPENSE: ', expenseData);
		addExpense(expenseData);
		onCancelAddNewExpense();
	};

	const onAddNewExpenseClicked = e => {
		e.preventDefault();
		console.log(e);
		setIsAddingExpense(true);
	};

	const onCancelAddNewExpense = () => {
		setIsAddingExpense(false);
	};

	//  let render = <AddExpense addExpense={onAddNewExpenseClicked} />;
	let render = <button onClick={onAddNewExpenseClicked}>Add New Expense</button>;

	if (isAddingExpense === true) {
		render = <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancelExpense={onCancelAddNewExpense} />;
	}

	return <div className='new-expense'>{render}</div>;
};

export default NewExpense;
