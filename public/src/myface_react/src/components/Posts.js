import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function Posts() {
    const [myData, setMyData] = useState(null);
    const { page } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3001/posts/?page=${page}&pageSize=10`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, [page]);

    console.log(myData);
    if (!myData) {
        return (
            <div>
                <h1>No Posts</h1>
            </div>)
    }

    const dataArray = myData.results.map(posts => 
        <li>
            <h2>{posts.message}</h2>
            <h3>{posts.postedBy.name}</h3>
            <img src={posts.imageUrl} />
            <p>Likes🔥: {posts.likedBy.length} </p>
            <p>Dislikes 🤢: {posts.dislikedBy.length} </p>
        </li>
    );

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {dataArray}
            </ul>
            <Link to={`/posts/${isNaN(page) ? 2 :  parseInt(page) + 1}`}>Next</Link>
            {myData.previous && !isNaN(page) && <Link to={`/posts/${parseInt(page) - 1}`}>Prev</Link>}
        </div>)
}
