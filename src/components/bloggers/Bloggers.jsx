import React from 'react';
import styles from './bloggers.module.scss';

// ======== components ========
import Blogger from './blogger/Blogger';
// ======== components ========

export default class Bloggers extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            bloggers: []
        }
    }

    async componentDidMount () {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(jsoned => {
            this.setState({bloggers: [...jsoned]})
        })
    }

    render() {
        return (
            <div className={styles.bloggersWrapper}>

                {
                    this.state.bloggers.map( (blogger, index) => {
                        return <Blogger name={blogger.name} index={index}/>
                    })
                }
            </div>
        )
    }
}