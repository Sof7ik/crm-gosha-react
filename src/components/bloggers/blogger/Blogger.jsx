import React from 'react';
import styles from './blogger.module.scss';

export default class Blogger extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className={styles.blogger} key={this.props.index}>
                <p className={styles.bloggerName}>{this.props.name}</p>
            </div>
        )
    }
}