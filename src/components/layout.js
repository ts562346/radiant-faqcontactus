import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
function Layout(props) {
    return (
        <>
            <Navbar />
            <div className="">
                {props.children}
            </div>

            <Footer />
        </>
    );
}

export default Layout;