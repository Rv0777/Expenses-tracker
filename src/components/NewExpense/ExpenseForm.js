import React, {useState} from 'react';

import './ExpenseForm.css';

function ExpenseForm(props){

    const [enteredTitle, setenetresTitle] = useState('');
    const [enteredAmount,setenteredAmount] = useState('');
    const [enteredDate,setenteredDate] = useState('');

    function titleChangeHandler(event){
        setenetresTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setenteredAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setenteredDate(event.target.value);
    }

    // const [] = useState()
    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setenetresTitle('');
        setenteredAmount('');
        setenteredDate('');
    } 
    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;