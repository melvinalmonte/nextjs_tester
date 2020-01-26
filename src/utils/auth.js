import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
// set up cookies
const cookies = new Cookies();
const serverUrl = 'http://localhost:3001';

export async function handleAuthSSR(ctx) {
    let token = null;

    if (ctx.req) {
        let cookie =  ctx.req.headers.cookie;
        token = cookie ?
            cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1") :
            null;
    }
    else {
        // we dont have request info aka Client Side
        token = cookies.get('token')
    }

    try {
        const response = await axios.get(serverUrl + "/api/token/ping", { headers: { 'Authorization': token } });
        // dont really care about response, as long as it not an error
        console.log("token ping:", response.data.msg)
    } catch (err) {
        // in case of error
        console.log("redirecting back to main page");
        // redirect to login
        if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/login'
            });
            ctx.res.end()
        } else {
            Router.push('/login')
        }
    }
}