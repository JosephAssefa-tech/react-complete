import './ExpenseForm.css'

import React,{useState} from "react";

const ExpenseForm = () =>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnterdAmount]=useState('');
    const [enteredDate,setEnterdDate]=useState('');
    
// const [userInput,setUserInput]=useState({
//     enterdTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// });
    
    const titleChangeHandler = event=>{
       setEnteredTitle(event.target.value)
     // setUserInput({
       //   ...userInput, 
       // enterdTitle:event.target.value, 
      // });
    //    setUserInput((previous)=>{
    //        //use this state mg't if your current state depend on your previous state
    //        return {
    //            ...previous, enterdTitle:event.target.value
    //        }
    //    })

    };
    const amountChangeHandler=(event)=>{
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount:event.target.value, 
        //  });
        setEnterdAmount(event.target.value);
        
    };
    const dateChangeHandler=(event)=>{
        // setUserInput({
        //     ...userInput, 
        //     enteredDate:event.target.value, 
        //  });
        setEnterdDate(event.target.value);
    }
const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    };
    console.log(expenseData);

}
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>)
    
}
export default ExpenseForm;