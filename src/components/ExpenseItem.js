import './ExpenseItem';

function ExpenseItem(props)
{

 

    return(
        <div className="expense-item">
           <div>
               {props.date.toISOString()}
           </div>
           <div className="expense-item__descriptioin">
               <h2>{props.title}</h2>
               <div className="expence-item__price">{props.amount}</div>
           </div>
         </div>
    );
}

export default ExpenseItem;