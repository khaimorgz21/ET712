import React from "react";
import "./index"
import "./index.css"

const User = function(props){
    return(
        <>
            <section className="card">
                <img src={props.image}/>
                <div classNmae="content">
                    <a classNmae="linkauthor">{props.username}</a>
                </div>
                <div className="metadata">
                    <span className="postdate">{props.date}</span>
                </div>
                <div className="content">
                    <p>{props.usercomment}</p>
                </div>
            </section>           
        </>
    )
}

export default User;