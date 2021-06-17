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
        </li>
    );

    // if (flag){
    //     postsArray.splice()
    // }

    const likesArray = myData.posts.map(post =>
        <li className="posts">
            <h4>{post.message}</h4>
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
        </li>
    );

    const dislikesArray = myData.posts.map(post =>
        <li className="posts">
            <h4>{post.message}</h4>
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
        </li>
    );

    const firstName = myData.name.split(" ")[0];

    return (
        <div>
            <img className="cover-image" src={myData.coverImageUrl} />
            <div className="body-container">
                <div className="user-profile-container">
                    <img className="profile-image" src={myData.profileImageUrl} />
                    <div className="user-details">
                        <h1>{myData.name}</h1>
                        <h2>
                            {myData.username}
                        </h2>
                        <p>{myData.email}</p>
                    </div>
                </div>
                <h3>{firstName}'s Posts</h3>
                <ul className="list-container">
                    {postsArray}
                </ul>
                <h3>Posts {firstName} Liked</h3>
                <ul className="list-container">
                    {likesArray}
                </ul>
                <h3>Posts {firstName} Disliked</h3>
                <ul className="list-container">
                    {dislikesArray}
                </ul>
            </div>
        </div >)
}