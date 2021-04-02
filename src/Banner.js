import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    The Big Bang Theory
                </h1>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h1 className="banner__description">
                    Sheldon Cooper and Leonard Hofstader along with Raj and Howard
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
