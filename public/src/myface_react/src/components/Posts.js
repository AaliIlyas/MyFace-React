import React, { useState, useEffect } from 'react';

export function Posts() {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => response.json())
            .then(data => setMyData(data))
    }, []);

    console.log(myData);
    if (myData.results !== undefined) {
        const dataArray = myData.results.map(posts => <li>{posts.message}</li>);
        
    return (
        <div>
            <ul>
                {dataArray}
            </ul>
        </div>)
    } else {
        return (
            <div>
                <h1>No Posts</h1>
            </div>)
    }
    


}
