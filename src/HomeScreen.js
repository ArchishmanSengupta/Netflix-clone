import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;