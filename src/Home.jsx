import React from "react";
import Web from "../src/img/second-removebg-preview.png";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your Bussiness with"
                visit="/service"
                imgsrc={Web}
                btname="Get Started"
            />
        </>
    )
}
export default Home;