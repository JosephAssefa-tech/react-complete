import './ExpenseItem';

function ExpenseItem()
{
    return(
        <div className="expense-item">
           <div>
               March 28th 2021
           </div>
           <div className="expense-item__descriptioin">
               <h2>Car Insurance</h2>
               <div className="expence-item__price">$295.00</div>
           </div>
         </div>
    );
}

export default ExpenseItem;