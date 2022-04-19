import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div><Link to="/">Home</Link> &nbsp;|&nbsp;
            <Link to="/UseRefHook">UseRefHook</Link> &nbsp;|&nbsp;
            <Link to="/UseCallbackHook">UseCallbackHook</Link></div>
            <div>
                Home
            </div>
        </>
    )
}
export default Home;