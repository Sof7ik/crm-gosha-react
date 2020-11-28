import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

// ======== components ========
import LoginPage from './components/pages/loginPage/LoginPage';
import Manager from './components/pages/manager/Manager';
import Brands from './components/pages/brands/Brands';
import {Bloggers} from './components/pages/bloggers/Bloggers';
import Sidebar from './components/sidebar/Sidebar';

import { Page404 } from './components/pages/404/404';
import { BloggerPage } from './components/pages/bloggers/bloggerPage/BloggerPage';
// ======== components ========

export const useRoutes = isAuthenticated => {
    if(isAuthenticated)
    {
        return (
            <Switch>
                <Route path="/manager">
                    <Sidebar/>
                    <Manager />
                </Route>

                <Route path="/brands">
                    <Sidebar/>
                    <Brands />
                </Route>

                <Route exact path="/bloggers">
                    <Sidebar/>
                    <Bloggers />
                </Route>

                <Route path="/bloggers/:id">
                    <Sidebar/>
                    <BloggerPage/>
                </Route>

                <Route exact path="/404">
                    <Sidebar/>
                    <Page404 />
                </Route>

                <Redirect to='/manager'/>
            </Switch> 
        )		
    } 
    return (
        <Switch>
            <Route path="/"> 
                <LoginPage/> 
            </Route>
            
            <Redirect to="/" />
        </Switch>
    )
}