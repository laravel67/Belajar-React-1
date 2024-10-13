// import { useEffect, useState } from "react";
// import { useState } from "react";

import { Link, useLoaderData } from "react-router-dom";

function Post() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const json = await response.json();
    //             setPosts(json);
    //         } catch (error) {
    //             console.error('Error fetching posts:', error);
    //         }
    //     };
        
    //     fetchPosts();
    // });

    const posts = useLoaderData();

    return (
        <>
            <h1>Halaman Blog</h1>
            <ol>
                {posts.map((post) => (
                    <>
                        <li>
                            <Link key={post.id} to={`/post/${post.id}`}>
                                <h3>{post.title}</h3>
                            </Link>
                        </li>

                    </>
                ))}
            </ol>
        </>
    );
}

export default Post;
