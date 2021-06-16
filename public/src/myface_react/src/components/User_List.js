import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export function UserList() {
    const [myData, setMyData] = useState(null);
    const [page, setPage] = useState(1);
    
    // let pathname = window.location.pathname;
    // // pathname = posts/?page=4&pageSize=10
    // console.log(pathname)

    // //localhost:3000/
    // //http://localhost:3001/posts

    let pathname = "";
    if (page <= 1) {
        pathname = "/users/"
    } else {
        pathname = `/users/?page=${page}&pageSize=10`
    }



    useEffect(() => {
        fetch(`http://localhost:3001/users/?page=${page}&pageSize=10`)
            .then(response => response.json())
            .then(data => setMyData(data))
        fetch(`http://localhost:3001${pathname}`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, [pathname]);

    //http://localhost:3001/posts/?page=2&pageSize=10  page2

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
            <Link to={`/posts/${page + 1}`}></Link>
            <button onClick={() => setPage(page + 1)} >Next page</button>
            <button onClick={() => setPage(page - 1)} >Previous page</button>
        </div>)
}
