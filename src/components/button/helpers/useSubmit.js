import {useState} from "react"
import axios from 'axios';
import Router from "next/router";
import { Cookies } from "react-cookie";

const serverUrl = 'http://localhost:3001';
const cookies = new Cookies();


export const useSubmit = () => {
    const [token, setToken] = useState(cookies.get("token") || null);

    const handleSubmit = async () => {
        console.log("Login called");
        const response = await axios.get(serverUrl + '/api/login');
        const token = response.data.token;
        cookies.set('token', token);
        setToken(token);
        await Router.push("/index")
    };

    return [handleSubmit]
};