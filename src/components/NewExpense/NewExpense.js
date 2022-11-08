import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const addNewExpenseHandler = (e) => {
    const newShowForm = !showForm;
    setShowForm((prev) => {
      return { ...prev, newShowForm };
    });
  };

  const cancelActionHandler = (e) => {
    setShowForm(false);
  };

  const saveExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
    console.log(expenseData);
  };

  let newExpenseContent = (
    <button type="button" onClick={addNewExpenseHandler}>
      Add New Expense
    </button>
  );
  if (showForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        cancelHandler={cancelActionHandler}
      />
    );
  }
  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
