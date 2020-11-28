import React from 'react';
import styles from './blogger.module.scss';

export const Blogger = props => (
    <div className={styles.blogger}>
        <div className={styles.bloggerAvatar} style={{backgroundImage: 'url('+props.image+')'}}></div>

        <div className={styles.bloggerInfo}>
            <span className={styles.bloggerName}>{`${props.name} ${props.surname}`}</span>

            <div className={styles.bloggerSocial}>
                <span className={styles.email}>{props.email}</span>
                <span className={styles.zip}>{props.zip}</span>
                <a href={props.website} rel="noopener noreferrer" target="_blank" className={styles.website}>{props.website}</a>
            </div>
        </div>
    </div>
)
