import './ExpenseItem.css';

import React,{useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate  from './ExpenseDate';

const ExpenseItem =(props)=>
{
    const [title,updateTitle]=useState(props.title);
   
const clickHandeler=()=>{
    updateTitle("updateing")
   
}

    return(
        <Card className="expense-item">
    <ExpenseDate date={props.date}/>
           <div className="expense-item__description">
               <h2>{title}</h2>
               <div className="expense-item__price">{props.amount}</div>
           </div>
    <button onClick={clickHandeler}>click button</button>
         </Card>
    );
}

export default ExpenseItem;