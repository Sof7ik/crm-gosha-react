import React from 'react';
import styles from "./manager.module.scss";

import Descriptor from './subComponents/managerDesc/Description';

export default function Manager () {
    return (
        <div className="wrapper">
            <div className={`${styles.avaDescWrapper}`}>
                <div className={`${styles.avatarWrapper}`}></div>
                <div className={`${styles.description}`}>
                    <Descriptor descName="фио сотрудника" descValue="Саня Попов"/>
                    <Descriptor descName="должность" descValue="Frontend"/>
                    <Descriptor descName="роль" descValue="Teamlead"/>
                </div>
            
            </div>
        </div>
        
    )
}