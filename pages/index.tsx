import type { NextPage } from 'next'
import Head from 'next/head'

import {About, Casestudy, Footer,Header,Navbar} from '../components'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Invorum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<Navbar/>
<Header/>
<Casestudy/>
<About/>
<Footer/>

    </div>
  )
}

export default Home
