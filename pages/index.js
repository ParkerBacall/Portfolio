import Head from 'next/head'
import React from 'react'
import ImageGrid from '../components/ImageGrid'
import { images } from '../data.js'

export default 
 function Home() {

  let homeImages = images.filter(image => {
    return image.categories.includes('home')
  }) 

  homeImages = homeImages.sort((a, b) => b.year - a.year);
  
  return (
    <>
      <Head>
        <title>Parker Bacall</title>
        <meta name="description" content="Portfolio Page showcasing the artwork of Parker Bacall" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ImageGrid images={homeImages} page={'home'}/>
      </div>
    </>
  )
}
