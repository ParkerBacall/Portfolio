import React from 'react'
import ImageGrid from '../../components/ImageGrid'
import { getImagesByHandle } from '../../data.js'
import { useRouter } from 'next/router'


export default function CategoryPage() {
    const { query } = useRouter();

   let images = getImagesByHandle(query.handle);
   images = images.sort((a, b) => b.year - a.year);

    return(
        <>
        <h2 className='p-2'>
           
        </h2>
        <ImageGrid images={images} page={query.handle}/>
        </>
    )
}
