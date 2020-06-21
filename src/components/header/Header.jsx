import React from 'react';
import styles from "./header.module.scss";

export default function Header(props) {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}> CRM </h2>
        </header>
    )
}

