import React from 'react'
import ImageGrid from '../../components/ImageGrid'
import { getImagesByHandle } from '../../data.js'
import { useRouter } from 'next/router'


export default function CategoryPage() {
    const { query } = useRouter();

   const images = getImagesByHandle(query.handle)
    return(
        <>
        <h2 className='p-2'>
           
        </h2>
        <ImageGrid images={images} page={query.handle}/>
        </>
    )
}
