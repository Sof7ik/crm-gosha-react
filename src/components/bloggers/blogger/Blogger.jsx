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
                    <span className={styles.bloggerName}>{`${this.props.name} ${this.props.surname}`}</span>

                    <div className={styles.bloggerSocial}>
                        <span className={styles.email}>{this.props.email}</span>
                        <span className={styles.zip}>{this.props.zip}</span>
                        <a href={this.props.website} rel="noopener noreferrer" target="_blank" className={styles.website}>{this.props.website}</a>
                    </div>
                </div>
            </div>
        )
    }
}