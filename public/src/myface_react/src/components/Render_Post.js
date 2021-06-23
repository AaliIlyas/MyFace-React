import React from 'react';

export function RenderPost({individualPost, refreshData}) {

    async function handleLikeClick(postId, type) {
        await fetch(`http://localhost:3001/posts/${postId}/${type}`, { method: 'POST' })
            .then(response => console.log(response.status))
            .then(() => refreshData())
    }

    return (
        <li className="posts">
            <img src={individualPost.imageUrl} />
            <h2>{individualPost.message}</h2>
            <h3>{individualPost.postedBy.name}</h3>
            <div className="posts-footer">
                <div className="reaction-container">
                    <p>Likes 🔥: {individualPost.likedBy.length} </p>
                    <p>Dislikes 🤢: {individualPost.dislikedBy.length} </p>
                </div>
                <button onClick={() => handleLikeClick(individualPost.id, "like")}
                    className="reaction-button">Like</button>
                <button onClick={() => handleLikeClick(individualPost.id, "dislike")}
                    className="reaction-button">Dislike</button>
            </div>
        </li >
    )
}
