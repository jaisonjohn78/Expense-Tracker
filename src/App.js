import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// funtion App() {it is also  Valid and works exactly the same }
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Rent",
    amount: 1000.0,
    date: new Date(2020, 2, 12),
  },
  {
    id: 2,
    title: "Car Insurance",
    amount: 286.55,
    date: new Date(2020, 1, 12),
  },
  {
    id: 3,
    title: "Groceries",
    amount: 500.0,
    date: new Date(2020, 2, 12),
  },
  {
    id: 4,
    title: "Gym",
    amount: 200.5,
    date: new Date(2020, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("data has be inherited from child component");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return[expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
