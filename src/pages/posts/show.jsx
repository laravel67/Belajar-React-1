// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function ShowPost() {
    // const params = useParams();
    // // const [post, setPost] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    
    // useEffect(() => {
    //     const fetchPost = async () => {
        //         try {
            //             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    //             if (!response.ok) {
        //                 throw new Error('Network response was not ok');
        //             }
        //             const json = await response.json();
        //             setPost(json);
        //         } catch (err) {
            //             setError(err.message);
            //         } finally {
    //             setLoading(false);
    //         }
    //     };
    
    //     fetchPost();
    // }, [params.id]);
    
    // if (loading) {
        //     return <p>Loading...</p>;
        // }
        
        // if (error) {
            //     return <p>Error: {error}</p>;
            // }
            
    const post= useLoaderData();
    return (
        <>
            <h1>{post?.title}</h1>
            <article>{post?.body}</article>
            <Link to="/posts">Back To Posts</Link>
        </>
    );
}

export default ShowPost;
