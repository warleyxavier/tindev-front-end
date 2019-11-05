import React from "react";

import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import "./Developer.css";

export default function Developer({entity, handleLike, handleDislike}) {

    return (
        <div className="developer-container">
            <img className="developer-photo" src={entity.avatar} alt={entity.name}/>
            <aside>
                <strong>{entity.name}</strong>
                <p>{entity.bio}</p>
            </aside>
            <div className="buttons">
                <button 
                    type="button"
                    onClick={() => handleLike(entity.id)}
                >
                    <img src={like} alt="like" />
                </button>
                <button 
                    type="button"
                    onClick={() => handleDislike(entity.id)}
                >
                    <img src={dislike} alt="dislike" />
                </button>
            </div>
        </div>
    );

};