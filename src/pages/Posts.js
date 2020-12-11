import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";

export default () => {
    const [userData, setData] = useState({
        isLoading: false,
        error: null,
        posts: []
    });

    useEffect(() => {
        setData(prevState => ({...prevState, isLoading: true}));
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(posts => {
                    setData((prevState) => ({
                        ...prevState,
                        isLoading: false,
                        posts: posts
                    }));
                })
                .catch(e => {
                    setData((prevState) => ({
                        ...prevState,
                        isLoading: false,
                        error: e
                    }))
                })
        }, 1000)

    }, []);

    const {isLoading, error, posts} = userData;
    return (
        <>
            <div style={{margin: '60px', width: '750px'}}>
                {isLoading && 'Loading....'}
                {!isLoading && !error &&
                (posts.length !== 0
                    ? <PostsList posts={posts}/>
                    : 'Empty list')
                }
                {!isLoading && error && 'Error happens'}
            </div>
        </>
    );
}

function PostsList(posts) {
    return (
        <ListGroup variant="flush">
            {posts.posts.map(post =>
                <ListGroup.Item key={post.id}>{post.title}
                    <Link to={"/post/" + post.id}> Read more...</Link>
                </ListGroup.Item>)}
        </ListGroup>
    )
}


