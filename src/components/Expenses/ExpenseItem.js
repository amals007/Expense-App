import React from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date} />
      <div className="expense-item__desciption">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={() => {alert("clicked")}}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
