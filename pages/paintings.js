import React from 'react'
import ImageGrid from '../components/ImageGrid'
import { getImagesByHandle } from '../Data.js'

export default function Paintings() {

   const images = getImagesByHandle('paintings')
    return(
        <>
        <h2 className='p-2'>
           Paintings
        </h2>
        <ImageGrid images={images}/>
        </>
    )
}
