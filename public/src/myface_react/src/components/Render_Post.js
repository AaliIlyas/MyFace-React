import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function RenderPost({individualPost}) {
    console.log(individualPost);
    const [likes, setLikes] = useState(individualPost.likedBy.length);
    const [dislikes, setDislikes] = useState(individualPost.dislikedBy.length);

    function handleLikeClick(postId, type) {
        fetch(`http://localhost:3001/posts/${postId}/${type}`, { method: 'POST' })
            .then(response => console.log(response.status))

        if (type === "like") {
            setLikes(likes + 1);
        } else {
            setDislikes(dislikes + 1);
        }
    }

    return (
        <li className="posts">
            <img src={individualPost.imageUrl} />
            <h2>{individualPost.message}</h2>
            <h3>{individualPost.postedBy.name}</h3>
            <div className="posts-footer">
                <div className="reaction-container">
                    <p>Likes 🔥: {likes} </p>
                    <p>Dislikes 🤢: {dislikes} </p>
                </div>
                <button onClick={() => handleLikeClick(individualPost.id, "like")}
                    className="reaction-button">Like</button>
                <button onClick={() => handleLikeClick(individualPost.id, "dislike")}
                    className="reaction-button">Dislike</button>
            </div>
        </li >
    )
}
