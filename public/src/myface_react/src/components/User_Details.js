import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function UserDetails() {
    const [myData, setMyData] = useState(null);
    const [flagPosts, setFlagPosts] = useState(false);
    const [likedPosts, setLikedPosts] = useState(false);
    const [dislikedPosts, setDislikedPosts] = useState(false);
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
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
            <h4>{post.message}</h4>
        </li>
    );

    if (!flagPosts) {
        postsArray.splice(6, 4);
    }

    const likesArray = myData.posts.map(post =>
        <li className="posts">
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
            <h4>{post.message}</h4>
        </li>
    );

    if (!likedPosts) {
        likesArray.splice(6, 4);
    }

    const dislikesArray = myData.posts.map(post =>
        <li className="posts">
            <img src={post.imageUrl} />
            <p>{post.createdAt}</p>
            <h4>{post.message}</h4>
        </li>
    );

    if (!dislikedPosts) {
        dislikesArray.splice(6, 4);
    }

    const firstName = myData.name.split(" ")[0];

    return (
        <div className="contents">
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
                    {!flagPosts && <button className="load-more" onClick={() => setFlagPosts(true)}>Load more</button>}
                <h3>Posts {firstName} Liked</h3>
                <ul className="list-container">
                    {likesArray}
                </ul>
                {!likedPosts && <button className="load-more" onClick={() => setLikedPosts(true)}>Load more</button>}
                <h3>Posts {firstName} Disliked</h3>
                <ul className="list-container">
                    {dislikesArray}
                </ul>
                {!dislikedPosts && <button className="load-more" onClick={() => setDislikedPosts(true)}>Load more</button>}
            </div>
        </div >)
}