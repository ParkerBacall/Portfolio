import React from 'react'
import ImageGrid from '../components/ImageGrid'
import { getImagesByHandle } from '../Data.js'

export default function Murals() {
    const images = getImagesByHandle('murals')

    return (
        <>
            <h2 className='p-2'>
                Murals
            </h2>
            <ImageGrid images={images} />
        </>
    )
}
