import { useState,useEffect } from 'react';
import postsData from '../../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';


function Home(){
    const [posts, setPosts]=useState(postsData);
    const [totaPosts, setTotalPosts]=useState(0);
    const [exPosts, setExPosts]=useState([]);

    const changeSearch =(value)=>{
        console.log(value);
        const filterPosts=postsData.filter((item)=>
            item.title.includes(value)
        );
        setPosts(filterPosts);
        setTotalPosts(filterPosts.length)
        // search=event.target.value
        // setSearch(event.target.value);
    }

    useEffect(()=>{
        // console.log("Test useEffect");
        // setInterval
        // return ()=>{
        //     removeEventListener
        //     clearInterval
        //     console.log("clean up")
        // }
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setExPosts(json))
    },[]);
    useEffect(()=>{
        console.log('');
        
    })

    return (
        <>
            <h1>Membuat Post Dengan React JS</h1>
            <Search onSearchChange={changeSearch} totalPosts={totaPosts}/>
                {
                    posts.map((props, index)=>(
                        <Article {...props} key={index}
                            // key={post.id}
                            // title={post.title}
                            // tag={post.tag}
                            // date={post.date}
                            // body={post.body}
                        />
                    ))
                }
            <hr/>
            <h2>Post Dari API</h2>
            {
                exPosts.map((item, index)=>(
                    <div key={index}>-{item.title}</div>
                ))
            }

        </>
    )
}

export default Home;