import React, { Fragment } from 'react';
import Row from './components/Row/Row';
import requests from './utils/requests';
import './utils/fontAwesome';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />

      <main className='movies'>
        <div className='container'>
          <Row rowTitle='Trending Now' fetchUrl={requests.fetchTrendingNow} />
          <Row
            rowTitle='Netflix Originals'
            fetchUrl={requests.fetchNetflixOriginal}
            isLarge
          />
          <Row rowTitle='Top Rated' fetchUrl={requests.fetchTopRated} />
          <Row rowTitle='Animation Movies' fetchUrl={requests.fetchAnimation} />
          <Row rowTitle='Action Movies' fetchUrl={requests.fetchAction} />
          <Row rowTitle='Sci-Fi Movies' fetchUrl={requests.fetchTVMovies} />
          <Row rowTitle='Comedies Movies' fetchUrl={requests.fetchComedies} />
          <Row rowTitle='Horror Movies' fetchUrl={requests.fetchHorror} />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
