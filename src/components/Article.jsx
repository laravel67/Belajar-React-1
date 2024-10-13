/* eslint-disable react/prop-types */
import { useContext } from "react";
import { globalContex } from "../context";
const ArticleStatus=({ isNew})=>{
    return isNew && <span>--Baru</span>;
}

const NewArticle=()=>{
    return <span>--Baru</span>;
}


function Article(props) {
    const user=useContext(globalContex);
    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date: {props.date} | Tag: {props.tag || "No Tag"}|| {props.isNew ? 'New':''}
            </small>
            <small>Create by:{user.username}</small>
            <ArticleStatus isNew={props.isNew}/>
            <article>{props.body}</article>
            {props.isNew && <NewArticle/>}
            <br/>
        </>
    );
};

export default Article;
