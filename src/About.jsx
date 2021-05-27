import React from "react";
import Web from "../src/img/second-removebg-preview.png";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name="Welcome to Our team"
                visit="/contact"
                imgsrc={Web}
                btname="Contact Us"
            />
        </>
    )
}
export default About;