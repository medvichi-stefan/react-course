import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses (props) {
    const expenses = props.expenses.map((e) => <ExpenseItem {...e} />);
    
    return (
        <div className="expenses">
            {expenses}
        </div>
    );
}

export default Expenses;