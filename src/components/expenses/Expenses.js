import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpensesChart';
import ExpensesList from './ExpenseList';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear) {
        // console.log('Expenses.js');
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    



    return (
        <div>
            <div className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                
                <ExpenseChart expenses={filteredExpenses}></ExpenseChart>

                <ExpensesList item={filteredExpenses}></ExpensesList>

                 
                
                {/* <ExpenseItem x={props.item[0].title} y={props.item[0].amount} z={props.item[0].date}></ExpenseItem>
                <ExpenseItem x={props.item[1].title} y={props.item[1].amount} z={props.item[1].date}></ExpenseItem>
                <ExpenseItem x={props.item[2].title} y={props.item[2].amount} z={props.item[2].date}></ExpenseItem>
                <ExpenseItem x={props.item[3].title} y={props.item[3].amount} z={props.item[3].date}></ExpenseItem> */}
            </div>
        </div>
    );
}

export default Expenses;