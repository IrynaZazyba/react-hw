import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ProtectedComponent from "./components/ProtectedComponent";
import Index from './pages/Index';
import Posts from './pages/Posts';
import Login from './pages/Login';
import UserProfile from "./components/UserProfile";
import Post from "./pages/Post";


function App() {

    const homeClass = window.location.pathname === "/" ? "active" : "";
    const postsClass = window.location.pathname.match(/^\/posts/) ? "active" : "";

    return (
        <React.Fragment>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={homeClass} href="/">Home</Nav.Link>
                        <Nav.Link className={postsClass} href="/posts">Posts</Nav.Link>
                        <UserProfile/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Router>
                    <Switch>
                        <Route path={'/'} component={Index} exact={true}/>
                        <Route path={'/posts'} render={() => {
                            return <ProtectedComponent render={(user => {
                                return <Posts/>
                            })}/>
                        }}/>
                        <Route path={'/post'} render={() => {
                            return <ProtectedComponent render={(user => {
                                return <Post/>
                            })}/>
                        }}/>
                        <Route path={'/login'} component={Login}/>
                    </Switch>
                </Router>
            </div>
        </React.Fragment>
    );
}

export default App;
