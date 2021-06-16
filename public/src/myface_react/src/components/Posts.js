import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export function Posts() {
    const [myData, setMyData] = useState(null);
    const [pathname, setPathname] = useState("/posts");
    const { page } = useParams();
    console.log(page);

 
    // if (page === undefined) {
    //     pathname = "/posts/"
    // } else {
    //     pathname = `/posts/${page}`
    // }

    useEffect(() => {
        fetch(`http://localhost:3001${pathname}`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, [pathname]);

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
            <Link to={myData.next} onClick={() => setPathname(myData.next)}>Next</Link>
            {myData.previous && 
            <Link to={myData.previous}>Prev</Link>}
        </div>)
}
