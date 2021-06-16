import React, { useState, useEffect } from 'react';

export function UserDetails() {
    const [myData, setMyData] = useState([]);

    const randomUserId = Math.floor(Math.random * 100);
    useEffect(() => {
        fetch(`http://localhost:3001/users/${randomUserId}`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, []);

    // const dataArray = myData.results.map(posts => {
    //     return (<li>
    //         <h2>{posts.message}</h2>
    //         <h3>{posts.postedBy.name}</h3>
    //         <img src={posts.imageUrl} />
    //         <p>Likes🔥: {posts.likedBy.length} </p>
    //         <p>Dislikes 🤢: {posts.dislikedBy.length} </p>
    //     </li>)
    // });

    if (myData !== undefined) {

        return (
            <div>
                <h1>{myData.name}</h1>
                <p>{myData.username}</p>
                <p>{myData.email}</p>
                <img src={myData.coverImageUrl}/>
                <img src={myData.profileImageUrl}/>
                <ul>
                    {/* {dataArray} */}
                </ul>
            
            </div>)
    } else {
        return (
            <div>
                <h1>No User</h1>
            </div>)
    }
}