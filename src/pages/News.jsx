import React, { useState, useEffect } from "react";
import '../styles/news.css'; 
import DashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'; 



function News () {
     
    const [posts, setPosts] = useState([]); 
    const [newPost, setNewPost] = useState ({title:"", content:""}); 
    const [editingPost, setEditingPost] = useState(null); 
    const [error, setError]  = useState(null); 
    const [loading, setLoading] = useState(false); 
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    // fecth posts
    const fetchPosts = async () => {
        setLoading(true); 
        setError(null);

        try {
            const response = await fetch ("http://localhost:8080/posts"); 
            if (!response.ok) throw new Error ("Failed to fetch posts."); 
            const data = await response.json(); 

            setPosts (data.posts || []); 
        } catch (error) {
            setError(error.message); 
        } finally {
            setLoading(false)
        }
    }; 

    // Create a new post (admin only)
    const handleCreatePost = async (e) => {
      
        e.preventDefault();
        if (!isAdmin){
            alert ("You are not authorized to perform this action.")
            return;
        }

        setError(null);

        try {
            const response = await fetch("http://localhost:8080/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, 
                },
                body: JSON.stringify(newPost),
            });

            if (!response.ok) throw new Error("Failed to create post.");

            const data = await response.json();
            setPosts((prevPosts) => [data.post, ...prevPosts]); // Add new post to the list
            setNewPost({ title: "", content: "" }); // Reset form
        } catch (error) {
            setError(error.message);
        }
    };

    // Update a post (admin only)
    const handleUpdatePost = async (postId) => {
        

        if (!isAdmin){
            alert ("You are not authorized to perform this action.")
            return;
        }

        const updatedData = { title: editingPost.title, content: editingPost.content };

        const token = localStorage.getItem("token"); // Ensure the token is correctly stored and retrieved

        try {
            const response = await fetch(`http://localhost:8080/posts/${postId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Add the token here
                },
                body: JSON.stringify(updatedData),
            });
        
            if (!response.ok) {
                throw new Error("Failed to update post");
                setEditingPost(null); // Close the edit form
                fetchPosts(); // Refresh posts after update
            }
        } catch (error) {
                setError(error.message); 
        }
        
       
    
        return await response.json();
    };

    // Delete a post (admin only)
    const handleDeletePost = async (postId) => {
        
        if (!isAdmin){
            alert ("You are not authorized to perform this action.")
            return;
        }

        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT for authentication
                },
            });
            if (!response.ok) throw new Error("Failed to delete post.");
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchPosts(); // Fetch posts on component load
    }, []);

    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-1" className="news-img"/>
            <div className="news-wrapper">
            <nav className="news-nav">

                <Link to="/profile">
                    <a>PROFILE</a>
                </Link>

                <Link to="/discover">
                    <a>DISCOVER</a>
                </Link>

                
                <Link to ="/news">
                    <a>NEWS</a>
                </Link>


                <Link to ="/lists"><a>LISTS</a></Link>

                <Link to="/">
                    <a>LOGOUT</a>
                </Link>
                </nav>


            <div className="news-form-container">
                <h3> 📮 𝒜𝓃𝓃ℴ𝓊𝓃𝒸ℯ𝓂ℯ𝓃𝓉𝓈 📜</h3>   
              
                {/* Admin: Create Post */}
                <form onSubmit={handleCreatePost}>
                        <input
                            type="text"
                            placeholder="Post Title"
                            value={newPost.title}
                            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Post Content"
                            value={newPost.content}
                            onChange={(e) =>
                                setNewPost({ ...newPost, content: e.target.value })
                            }
                            required
                        ></textarea>
                        <button type="submit">Create Post</button>
                    </form>
                

                    {/* List Posts */}
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className="post-card">
                                <h4>{post.title}</h4>
                                <p>{post.content}</p>
                                <small>
                                    By: {post.createdBy?.username || "Unknown"} |{" "}
                                    {post.createdBy?.email || ""}
                                </small>

                                {/* Admin Actions */}
                                <div className="post-actions">
                                    <button onClick={() => setEditingPost(post)} className="edit-button" >
                                        Edit
                                    </button>

                                    <button onClick={() => handleDeletePost(post._id)} className="delete-button">
                                        Delete
                                    </button>
                                </div>
                                

                                {/* Edit Form */}
                                {editingPost && editingPost._id === post._id && (
                                    <form onSubmit={(e) => handleUpdatePost(e, post._id)}>
                                        <input
                                            type="text"
                                            value={editingPost.title}
                                            onChange={(e) =>
                                                setEditingPost({
                                                    ...editingPost,
                                                    title: e.target.value,
                                                })
                                            }
                                        />
                                        <textarea
                                            value={editingPost.content}
                                            onChange={(e) =>
                                                setEditingPost({
                                                    ...editingPost,
                                                    content: e.target.value,
                                                })
                                            }
                                        ></textarea>
                                        <button type="submit">Update Post</button>
                                    </form>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
         
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default News; 