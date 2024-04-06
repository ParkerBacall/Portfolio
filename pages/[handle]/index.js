import React from 'react'
import ImageGrid from '../../components/ImageGrid'
import { getImagesByHandle } from '../../data.js'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CategoryPage() {
    const { query } = useRouter();

   let images = getImagesByHandle(query.handle);
   images = images.sort((a, b) => b.year - a.year);


   if (!images?.length) {
    return (
        <div className='flex items-center flex-col'>
            <h2 className='p-2 text-[24px]'>
                Woah Page Not Found
            </h2>

            <Link className='text-[18px] underline' href="/">Return to home</Link>
        </div>
    )
}

    return(
        <>
        <h2 className='p-2'>
           
        </h2>
        <ImageGrid images={images} page={query.handle}/>
        </>
    )
}
