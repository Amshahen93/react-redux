import React from 'react';
import classes from './Input.css';


const Input = props => {
    const htmlFor = `input-${Math.random()}`

    return (
        <div className = {classes.Input}>
           <label htmlFor = {htmlFor} className = {classes.title}>
               {props.label}
            </label> 
            <input  id = {htmlFor} value = {props.value} onChange = {props.onChange} className = 'form-control'/>   
        </div>
    )
}

export default Input
