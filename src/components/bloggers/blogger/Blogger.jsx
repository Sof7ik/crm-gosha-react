import React from 'react';
import styles from './blogger.module.scss';

export default class Blogger extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className={styles.blogger}>
                <div className={styles.bloggerAvatar} style={{backgroundImage: 'url('+this.props.image+')'}}></div>

                <div className={styles.bloggerInfo}>
                    <span className={styles.bloggerName}>{this.props.name + this.props.surname}</span>

                    <div className={styles.bloggerSocial}>
                        <span className={styles.email}>{this.props.email}</span>
                        <span className={styles.zip}>{this.props.zip}</span>
                        <span className={styles.website}>{this.props.website}</span>
                    </div>
                </div>
            </div>
        )
    }
}