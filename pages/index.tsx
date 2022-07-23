import type { NextPage } from 'next'
import Head from 'next/head'

import {About, Casestudy, Footer,Header,Navbar} from '../components'


const Home: NextPage = () => {
  return (
    <div className="pb-8">
      <Head>
        <title>Invorum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[url('../assets/headerImage.png')] h-screen bg-cover bg-no-repeat bg-center pt-[50px]   ">
      <Navbar/>
      <Header/>

      </div>
<Casestudy/>
<About/>
<Footer/>

    </div>
  )
}

export default Home
