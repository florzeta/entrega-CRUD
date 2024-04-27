import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/pages/PublicacionesPage.css';

const PublicacionesPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('/api/blog')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <main className="holder main">
            <div className="publicaciones">
                <h2>Publicaciones</h2>
                <div className="container">
                    <ul>
                        {posts.map(post => (
                            <li key={post._id}>
                                <Link to={`/post/${post._id}`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default PublicacionesPage;