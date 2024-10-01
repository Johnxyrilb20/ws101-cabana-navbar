import React from "react"
import './Navbar.css'
export default function Navbar () {
    return (
        <header className="header">
            <h1><a href="/" className="logo">Cabana logo</a></h1>

            <nav className="nav">
                <Customlink href="/home">Home</Customlink>
                <Customlink href="/about">About</Customlink>
                <Customlink href="/contact">Contact</Customlink>
            </nav>
        </header>
    )
}

function Customlink({href, children,...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" :""}>
            <a href={href} {...props}>
            {children}</a>
        </li>
    )
}