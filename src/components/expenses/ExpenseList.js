import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpensesList(props){
    
    if(props.item.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>; 
    }

    return (
    <ul className="expenses-list">
        {props.item.map((expense) => (
            <ExpenseItem
                key={expense.id}
                x={expense.title}
                y={expense.amount}
                z={expense.date}
            />
            ))}
    </ul>
    );

}

export default ExpensesList;