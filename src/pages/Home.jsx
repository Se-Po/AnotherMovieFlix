import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
      <Main />
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='NowPlaying' fetchURL={requests.requestNowPlaying}/>
      <Row title='TopRated' fetchURL={requests.requestTopRated}/>
    </>
  )
}

export default Home