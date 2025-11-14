import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from './../../../src/components/Footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* this is a placeholder to load all child components */}
            <Outlet />

            <Footer />
        </div>
    );
}

export default Home;
