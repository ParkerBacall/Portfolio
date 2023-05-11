import Head from 'next/head'
import React from 'react'
import ImageGrid from '../components/ImageGrid'


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
        <ImageGrid/>
      </div>
    </>
  )
}
