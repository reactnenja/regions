"use client";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);

        if (!show) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    };

    return (
        <nav className="shadow-sm bg-white h-16 fixed top-0 w-full dark:bg-black dark:text-white text-green-600">
            {" "}
            <div className="max-w-[1280px] container mx-auto px-12">
                <div className="w-full flex justify-between items-center h-16">
                    <h1 className="text-3xl font-bold">Where in the world?</h1>
                    <div>
                        <button
                            onClick={handleClick}
                            className={`p-2 text-2xl bg-black rounded-md font-bold ${
                                show ? "text-green-600" : "text-white"
                            } `}
                        >
                            {show ? <MdOutlineLightMode /> : <MdDarkMode />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
