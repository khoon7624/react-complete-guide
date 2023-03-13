import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "화장지",
      amount: 120000,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "TV", amount: 1040000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "자동차 보험",
      amount: 1100000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "책상",
      amount: 587000,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.js에서 실행됨");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
