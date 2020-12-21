import React from 'react'

export default function Header() {
    return (
        <header style={headStyle}>
            The best TO-DO List
        </header>
    )
}

const headStyle = {
    background: "navy",
    color: "#fff",
    padding: "30px",
    margin: "auto",
    textAlign: "center"
}