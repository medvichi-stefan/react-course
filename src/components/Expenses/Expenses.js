import ExpenseItem from './ExpenseItem';
import Card from './../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const expenses = props.expenses.map((e) => <ExpenseItem {...e} />);

    return (
        <Card className="expenses">
            {expenses}
        </Card>
    );
}

export default Expenses;