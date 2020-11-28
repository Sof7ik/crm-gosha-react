import React, {useState, useEffect} from 'react';
import styles from './bloggers.module.scss';

// ======== components ========
import { Blogger } from './bloggerCard/BloggerCard';
import { Input } from 'antd';
// ======== components ========

import FetchData from "../../../FetchData/fetchData";

export const Bloggers = props => {
    const fetchData = new FetchData();
    const [bloggers, setBloggers] = useState([]);

    useEffect( () => {
       fetchData.getBloggers().then(data => {
            setBloggers([...data]);
        })
    }, [])

    const { Search } = Input;
    return (
        <div className='wrapper'>
            
            <Search placeholder="Начните вводить блоггера" enterButton className="searchInput"/>

            <div className={styles.bloggersWrapper}>

                {
                    bloggers.map( (blogger, index) => {
                        return <Blogger
                            key={blogger.id}
                            image='https://via.placeholder.com/120x120'
                            name={blogger.name}
                            surname={blogger.surname}
                            email={blogger.email}
                            zip={blogger.zip}
                            website={blogger.website}/>
                    })
                }

            </div>
        </div>
    )
}