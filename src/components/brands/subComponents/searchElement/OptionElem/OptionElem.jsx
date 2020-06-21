import React from 'react';
import styles from "./OptionElem.module.css";

export default function OptionElem(props) {
    return(
        <option>{`${props.value}`}</option>
    )
    
}