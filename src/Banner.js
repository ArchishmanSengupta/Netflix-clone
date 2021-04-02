import React from 'react'
import "./Banner.css"

function Banner() {
    function truncate(string,n){
        //ellipses function
        return string?.length > n ?string.substr(0,n-1)+'...' :string;

    }
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
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                {truncate(
                `The Big Bang Theory is an American television sitcom created by Chuck Lorre and Bill Prady, both of whom served as executive producers on the series, along with Steven Molaro. All three also served as head writers. The show premiered on CBS on September 24, 2007, and concluded on May 16, 2019,
                having broadcast a total of 279 episodes over twelve seasons.[3]
                The show originally centered on five characters living in Pasadena, California: 
                Leonard Hofstadter and Sheldon Cooper, both physicists at Caltech, who share an apartment; 
                Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's
                similarly geeky and socially awkward friends and co-workers, aerospace engineer Howard Wolowitz and astrophysicist Raj
                Koothrappali.[4][5] Over time, supporting characters were promoted to starring roles, including neuroscientist Amy Farrah Fowler, 
                Bernadette Rostenkowski, experimental physicist Leslie Winkle, and comic book store owner Stuart Bloom.Over time, supporting characters were promoted to starring roles, including neuroscientist Amy Farrah Fowler, 
                Bernadette Rostenkowski, experimental physicist Leslie Winkle, and comic book store owner Stuart Bloom.`,400)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
