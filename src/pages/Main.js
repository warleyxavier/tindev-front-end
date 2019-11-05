import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import logo from "../assets/logo.svg"
import Developer from "../components/Developer";
import APIRequest from "../services/APIRequest";
import "./Main.css";

export default function Main({match}) {

    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        async function loadDevelopers() {

            const response = await APIRequest.get("developer/developers", {
                headers: {
                    authorization: match.params.id
                }
            })

            setDevelopers(response.data);

        };

        loadDevelopers();
    }, [match.params.id]);

    async function handleLike(id) {        
        await APIRequest.post(`developer/like/${id}`, null, {
            headers: {
                authorization: match.params.id
            }
        });

        setDevelopers(developers.filter(developer => developer.id !== id));
    };

    async function handleDislike(id) {
        await APIRequest.post(`developer/dislike/${id}`, null, {
            headers: {
                authorization: match.params.id
            }
        });

        setDevelopers(developers.filter(developer => developer.id !== id));
    };

    return (
        <div className="main-container">
            <header>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </header>
            <div className="developers">
                {
                    developers.length > 0 ? (
                        <ul>
                            {
                                developers.map(developer => (
                                    <li key={developer.id}>
                                        <Developer 
                                            entity={developer} 
                                            handleLike={handleLike}
                                            handleDislike={handleDislike}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        <p></p>
                    )
                }                
            </div>        
        </div>
    );

};