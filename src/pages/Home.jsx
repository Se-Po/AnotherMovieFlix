import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='2' title='NowPlaying' fetchURL={requests.requestNowPlaying}/>
      <Row rowID='3' title='TopRated' fetchURL={requests.requestTopRated}/>
    </>
  )
}

export default Home