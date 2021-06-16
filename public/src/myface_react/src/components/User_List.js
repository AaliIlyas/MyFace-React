import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function UserList() {
    const [myData, setMyData] = useState(null);
    const { page } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/users/?page=${page}&pageSize=10`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, [page]);

    console.log(myData);
    if (!myData) {
        return (
            <div>
                <h1>No Users</h1>
            </div>)
    }

    const dataArray = myData.results.map(user =>
        <Link to={`/users/id/${user.id}`}>
            <li>
                <h2>{user.name}</h2>
                <h3>{user.username}</h3>
                <img src={user.profileImageUrl} />
            </li>
        </Link>
    );

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {dataArray}
            </ul>
            <Link to={`/users/${isNaN(page) ? 2 : parseInt(page) + 1}`}>Next</Link>
            {myData.previous && !isNaN(page) && <Link to={`/users/${parseInt(page) - 1}`}>Prev</Link>}
        </div>)
}