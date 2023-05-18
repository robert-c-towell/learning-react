import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {date: new Date(2021, 2, 28), title: 'Car Insurance', amount: 294.67},
    {date: new Date(2022, 4, 14), title: 'Rent', amount: 109.22},
    {date: new Date(2023, 1, 17), title: 'TV', amount: 494.35},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      {}
      <ExpenseItem {...expenses[0]}/>
    </div>
  );
}

export default App;
