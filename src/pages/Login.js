import React, {useState} from "react";

import APIRequest from "../services/APIRequest";
import logo from "../assets/logo.svg";
import "./Login.css";

export default function Login() {

    const [userName, setUserName] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await APIRequest.post("developer/", {
            user: userName
        });

        const {id} = response.data;

        window.location.href = `/main/${id}`;

    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <img src={logo} alt="Logo" />
                <input
                    type="text"
                    placeholder="Digite seu usuário"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit" >Entrar</button>
            </form>            
        </div>
    );

};