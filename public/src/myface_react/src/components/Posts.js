import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RenderPost } from './Render_Post';

export function Posts() {
    const [myData, setMyData] = useState(null);
    const { page } = useParams();

    const [likes, setLikes] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3001/posts/?page=${page}&pageSize=10`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, []);

    if (!myData) {
        return (
            <div>
                <h1>No Posts</h1>
            </div>)
    }

    function handleLikeClick(postId) {
        fetch(`http://localhost:3001/posts/${postId}/like`, { method: 'POST' })
            .then(response => console.log(response.status)
            )
    }

    const dataArray = myData.results.map(posts =>
        <RenderPost individualPost={posts} />
    );

    return (
        <div className="contents">
            <h1>Posts</h1>
            <ul className="list-container">
                {dataArray}
            </ul>
            {myData.previous && !isNaN(page) && <Link to={`/posts/${parseInt(page) - 1}`} className="prev">Prev</Link>}
            <Link to={`/posts/${isNaN(page) ? 2 : parseInt(page) + 1}`} className="next" >Next</Link>
        </div>)
}
