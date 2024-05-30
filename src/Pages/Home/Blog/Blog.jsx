import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const userId = 'user123'; // Simulated user ID (replace with actual user ID from authentication)

    useEffect(() => {
        // Load posts for the current user from local storage when component mounts
        const savedPosts = localStorage.getItem(`blogPosts_${userId}`);
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, [userId]); // Reload posts when userId changes (e.g., user logs in/out)

    const handlePostSubmit = (formData) => {
        const newPost = {
            id: Math.random().toString(36).substr(2, 9), // Generate a unique ID for the post
            title: formData.title,
            story: formData.story,
            image: formData.image,
            likes: 0,
            comments: [],
            userId: userId // Associate the post with the current user
        };

        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        localStorage.setItem(`blogPosts_${userId}`, JSON.stringify(updatedPosts)); // Save user's posts to local storage
    };

    const handleLike = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
        localStorage.setItem(`blogPosts_${userId}`, JSON.stringify(updatedPosts)); // Update user's posts in local storage
    };

    const handleComment = (postId, commentText) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, comments: [...post.comments, commentText] };
            }
            return post;
        });
        setPosts(updatedPosts);
        localStorage.setItem(`blogPosts_${userId}`, JSON.stringify(updatedPosts)); // Update user's posts in local storage
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
        localStorage.setItem(`blogPosts_${userId}`, JSON.stringify(updatedPosts)); // Update user's posts in local storage
    };

    return (
        <div>
            <h1 className="text-4xl text-center mb-4">My Blog</h1>

            {/* Form for submitting a new post */}
            <PostForm onSubmit={handlePostSubmit} />

            {/* Render each post */}
            {posts.map(post => (
                <div key={post.id} className="border p-4 mb-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    {post.image && <img src={post.image} alt={post.title} className="my-2 max-w-full" />}
                    <p>{post.story}</p>

                    {/* Like button */}
                    <button onClick={() => handleLike(post.id)} className="mr-2">Like ({post.likes})</button>

                    {/* Comments */}
                    <div>
                        <h3 className="font-semibold mt-4">Comments:</h3>
                        <ul>
                            {post.comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                        {/* Form for submitting a comment */}
                        <CommentForm postId={post.id} onSubmit={handleComment} />
                    </div>

                    {/* Delete button (render only for the post's owner) */}
                    {post.userId === userId && (
                        <button onClick={() => handleDeletePost(post.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
                            Delete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

// Component for posting a new story
const PostForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ title: '', story: '', image: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: '', story: '', image: '' }); // Reset form fields after submission
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} className="block w-full border rounded py-2 px-3 mb-2" required />
        <input type="text" name="image" placeholder="Image URL (optional)" value={formData.image} onChange={handleInputChange} className="block w-full border rounded py-2 px-3 mb-2" />
        <textarea name="story" placeholder="Your story..." value={formData.story} onChange={handleInputChange} className="block w-full border rounded py-2 px-3 mb-2" required />
        <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Post</button>
        </div>
    </form>
    );
};

// Component for commenting on a post
const CommentForm = ({ postId, onSubmit }) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(postId, commentText);
        setCommentText(''); // Clear comment input after submission
    };

    return (
        <form onSubmit={handleSubmit} className="mt-2">
            <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Write a comment..." className="border rounded py-1 px-2 mr-2" required />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Comment</button>
        </form>
    );
};

export default Blog;
