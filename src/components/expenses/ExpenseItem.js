import React, {useState} from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return (
        
        <div className="expense-item">
        <ExpenseDate D={props.z}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{props.x}</h2>
                <div className="expense-item__price">Rs{props.y}</div>
            </div>
           
        </div>
        
    );
}

export default ExpenseItem;