import React from 'react';
import styles from "./Manager.module.css";

import Descriptor from './subComponents/managerDesc/Description';

export default function Manager () {
    return (
        <div className={`${styles.avaDescWrapper}`}>
            <div className={`${styles.avatarWrapper}`}></div>
            <div className={`${styles.description}`}>
                <Descriptor descName="фио сотрудника" descValue="Саня Попов"/>
                <Descriptor descName="должность" descValue="Frontend"/>
                <Descriptor descName="роль" descValue="Teamlead"/>
            </div>
            
        </div>
    )
}