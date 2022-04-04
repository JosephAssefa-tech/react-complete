import './ExpenseItem';

function ExpenseItem()
{

    const expenseDate=new Date(2021,3,2);
    const expenseTitle='Title';
    const expenseAmount=254

    return(
        <div className="expense-item">
           <div>
               {expenseDate.toISOString()}
           </div>
           <div className="expense-item__descriptioin">
               <h2>{expenseTitle}</h2>
               <div className="expence-item__price">{expenseAmount}</div>
           </div>
         </div>
    );
}

export default ExpenseItem;