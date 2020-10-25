import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {AuthContext} from "../context/authContext";

export default (props) => {
    const {user, setUser} = useContext(AuthContext);
    const prevPageLocation = props?.history?.location?.state?.from || '/';

    const [fields, setField] = useState({
        username: '',
        password: ''
    });
    const [loginState, changeLoginState] = useState({
        user: null,
        loginFailed: false
    });

    const handleInput = (fieldName) =>
        (e) => {
            const value = e.target.value;
            setField(preState => ({
                ...preState,
                [fieldName]: value
            }))
        };

    const loginForm = (
        <div style={{margin: '70px 550px'}}>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" value={fields['username']} onChange={handleInput('username')}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields['password']} onChange={handleInput('password')}/>
                </Form.Group>
                <Button variant="primary" type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            const {username, password} = fields;
                            if (username === 'test' && password === 'test') {
                                setUser({
                                    username: 'Test'
                                });
                            } else {
                                console.log("hello");
                            }
                        }}>
                    Login
                </Button>
            </Form>
        </div>
    );

    return user ? <Redirect to={prevPageLocation}/> : loginForm;
}