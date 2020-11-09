import React from 'react';
import styles from "./content.module.scss";
import {Route} from 'react-router-dom';

// ======== components ========
import Manager from '../manager/Manager';
import Brands from '../brands/Brands';
// import Goods from '../goods/Goods';
import Bloggers from '../bloggers/Bloggers';
// ======== components ========

export default function Content () {
    return(
        <div className={`${styles.container}`}>
                <Route path="/manager"> <Manager /> </Route>
                <Route path="/brands"> <Brands /> </Route>
                {/* <Route path="/brands/goods"> <Goods /> </Route> */}
                <Route path="/bloggers"> <Bloggers /> </Route>
        </div>
    )
    
}