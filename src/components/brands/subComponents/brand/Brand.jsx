import React from 'react';
import styles from "./Brand.module.css";

export default function Brand (props) {
    return(
        <div className={`${styles.brandWrapper}`}>
            <img src={`${props.imageURL}`} alt="brand-logo"></img>
            <span>{`${props.brandName}`}</span>
        </div>
    )
}