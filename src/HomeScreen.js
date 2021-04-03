import React from 'react'
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner.js"
import requests from './Request';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
        <Banner />
        {/* <Row 
        title='NETFLIX ORIGINALS'
        fetchURK={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>

        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/> */}

        {/* props allows us to customize one component from another */}
        </div>
    )
}

export default HomeScreen
