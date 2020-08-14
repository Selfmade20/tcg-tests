import React, { Component } from 'react';
import './Home.css';

export default function Home() {
    return (
        <div>
            <h1 className="homepage">
                <div className="description">
                    <p>Production is where you set up your todo-list </p>
                    <a href="http://localhost:3000/register"><button>Register</button></a>
                </div>
            </h1>
        </div>
    )
}