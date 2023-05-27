import React from 'react'

import ImageGrid from '../components/ImageGrid'

import { getImagesByHandle } from '../Data.js'

export default function Animations() {
    const images = getImagesByHandle('animations')

    return (
        <>
            <h2 className='p-2'>
                Animations
            </h2>
            <ImageGrid images={images} />
        </>
    )
}
