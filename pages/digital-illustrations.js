import React from 'react'
import ImageGrid from '../components/ImageGrid'
import CategoryTitle from '../components/CategoryTitle'

import { getImagesByHandle } from '../Data.js'

export default function DigitalIllustrations() {
    const images = getImagesByHandle('digital-illustration')

    return (
        <>
            <CategoryTitle title={'Digital Illustrations'}/>
            <ImageGrid images={images} />
        </>

    )
}
