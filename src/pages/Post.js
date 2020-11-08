import React, {Component} from 'react';
import Card from "react-bootstrap/Card";

export default class Post extends Component {
    state = {
        post: []
    };

    componentDidMount() {
        let urlsComponent = window.location.pathname.split('/');
        let id = urlsComponent[urlsComponent.length - 1];
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => res.json())
            .then(post => {
                this.setState((prevState) => ({
                    ...prevState,
                    post
                }));
            });
    }

    render() {
        const {post} = this.state;
        return (
            <Card style={{width: '29rem', margin: '75px'}}>
                <Card.Body>
                    <Card.Text>
                        <span style={{color: '#ff5d00'}}>Title:</span>
                        <div>{post.title}<br/></div>
                    </Card.Text>
                    <Card.Text>
                        <span style={{color: '#ff5d00'}}>Body:</span>
                        <div>{post.body}</div>
                    </Card.Text>
                    <Card.Link href="/posts">Card Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }


}

