import React from 'react';
import styles from "./Description.module.css";

export default function Descriptor(props) {
    return (
        <div className={styles.descWrapper}>
            <p className={`${styles.descName}`}>
                {`${props.descName}`}
            </p>

            <p className={`${styles.descValue}`}>{`${props.descValue}`}</p>
        </div>
    )
}

