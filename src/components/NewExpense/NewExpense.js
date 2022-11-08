import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const newExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default newExpense;
