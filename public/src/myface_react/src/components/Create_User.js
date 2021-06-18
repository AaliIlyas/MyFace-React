import React, { useState, useEffect } from 'react';

export function CreateUser() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    function emailInputChange(event) {
        setEmail(event.target.value);
        console.log(event.target.value)
    }

    function usernameInputChange(event) {
        setUsername(event.target.value);
    }

    function submit(event) {
        event.preventDefault();
        const obj = {}
        // obj["message"] = userMessage;
        // obj["imageUrl"] = userImage;
        console.log(obj);

        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
            .then(response => console.log(response.status, response.statusText))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            hi
            <form onSubmit={submit}>
                <p>Create Username</p>
                <input
                    className="input-message"
                    type="text"
                    name="message"
                    placeholder="message"
                    onChange={emailInputChange} ></input>

                <p>CreateEmail</p>
                <input
                    className="input-image"
                    type="email"
                    name="imageUrl"
                    placeholder="email address"
                    onChange={usernameInputChange} ></input>

                {/* <p>profile</p>
                <input
                    type="text"
                    name="profile"
                    placeholder="imageUrl"
                    onChange={} ></input>

                <p>cover Image</p>
                <input
                    type="text"
                    name="cover image"
                    placeholder="imageUrl"
                    onChange={} ></input> */}

                <button className="input-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
