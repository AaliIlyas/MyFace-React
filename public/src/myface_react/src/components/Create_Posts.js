import React, { useState, useEffect } from 'react';

export function CreatePosts() {
    const [userMessage, setUserMessage] = useState("");
    const [userImage, setUserImage] = useState("");

    function messageInputChange(event) {
        setUserMessage(event.target.value);
        console.log(event.target.value)
    }

    function imageInputChange(event) {
        setUserImage(event.target.value);
    }

    function submit(event) {
        event.preventDefault();
        const obj = {
            message: userMessage,
            imageUrl: userImage
        }
        console.log(obj);

        fetch('http://localhost:3001/posts/create/', {
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
                <p>Input message</p>
                <input
                    className="input-message"
                    type="text"
                    name="message"
                    placeholder="message"
                    onChange={messageInputChange} ></input>

                <p>Input image url</p>
                <input
                    className="input-image"
                    type="text"
                    name="imageUrl"
                    placeholder="imageUrl"
                    onChange = {imageInputChange} ></input>

                <button className="input-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
