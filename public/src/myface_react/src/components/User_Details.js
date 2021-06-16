import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function UserDetails() {
    const [myData, setMyData] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/users/${userId}`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, [userId]);

    console.log(myData);
    if (!myData) {
        return (
            <div>
                <h1>No Data</h1>
            </div>)
    }

    const postsArray = myData.posts.map(post =>
        <li className="posts">
            <h4>{post.message}</h4>
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
            <img src={post.profileImageUrl} />
        </li>
    );

    const likesArray = myData.posts.map(post =>
        <li className="posts">
            <h4>{post.message}</h4>
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
            <img src={post.profileImageUrl} />
        </li>
    );

    const dislikesArray = myData.posts.map(post =>
        <li className="posts">
            <h4>{post.message}</h4>
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
            <img src={post.profileImageUrl} />
        </li>
    );

    return (
        <div>
            <h1>{myData.name}</h1>
            <h2>
                {myData.username}
            </h2>
            <p>{myData.email}</p>
            <img src={myData.profileImageUrl} />
            <img src={myData.coverImageUrl} />
            <h3>{myData.name}'s Posts</h3>
            <ul>
                {postsArray}
            </ul>
            <h3>Likes</h3>
            <ul>
                {likesArray}
            </ul>
            <h3>Likes</h3>
            <ul>
                {dislikesArray}
            </ul>
        </div>)
}