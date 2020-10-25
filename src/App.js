import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ProtectedComponent from "./components/ProtectedComponent";
import Index from './pages/Index';
import Posts from './pages/Posts';
import Login from './pages/Login';
import UserProfile from "./components/UserProfile";


function App() {
    return (
        <React.Fragment>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/posts">Posts</Nav.Link>
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
                        }}/>/>
                        <Route path={'/login'} component={Login}/>
                    </Switch>
                </Router>
            </div>
        </React.Fragment>
    );
}

export default App;
