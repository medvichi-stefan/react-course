import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses (props) {
    const expenses = props.expenses.map((e) => <ExpenseItem {...e} />);

    return (
        <Card className="expenses">
            {expenses}
        </Card>
    );
}

export default Expenses;