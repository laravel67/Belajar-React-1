/* eslint-disable react/prop-types */
import { useState } from "react";


function Search(props){
    const [search, setSearch]=useState("");
    //  const onSearch =()=>{
    //         // console.log(event.target.value);
    //         // search=event.target.value
    //         // setSearch(event.target.value);
    //         // props.onChangeSearch(event.target.value)
    //         props.onSearch(search);
    // }
    // const handleClick=()=>{
    // }

    const onSearchChange=()=>{
        props.onSearchChange(search);
    };

    const searchKeyDown=(e)=>{
        if(e.key==='Enter'){
            onSearchChange();
        };
    }

    return (
        <>
            <div>
                Cari Artikel: {""} 
                <input onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeyDown}/>
                <button onClick={onSearchChange}>cari</button>
            </div>
            <small>
                Ditemukan {props.totalPosts} Dari Kata {search}
            </small>
            <hr/>
        </>
    );
}

export default Search;