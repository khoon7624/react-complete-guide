import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseNewItem(props){
    return(
        <div className="expense-item">
            <ExpenseDate date={props.product.date}/>
            <div className="expense-item__description">
                <h2>{props.product.title}</h2>
                <div className="expense-item__price">${props.product.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseNewItem;