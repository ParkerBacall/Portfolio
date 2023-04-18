import Head from 'next/head'
import React from 'react'
import ImageSlideshow from '../components/ImageSlideshow'


export default 
 function Home() {
  

  return (
    <>
      <Head>
        <title>Parker Bacall</title>
        <meta name="description" content="Portfolio Page showcasing the artwork of Parker Bacall" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <ImageSlideshow/>
      <p className='text-center my-[20px]'>
        Site is currently in progress
      </p>
      </div>
    </>
  )
}
