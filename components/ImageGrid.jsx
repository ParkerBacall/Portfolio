import GridImage from './GridImage'
import React from 'react'

export default function ImageSlideshow({ images }) {

    const gridImages = images.map((image, index) => {
        return <GridImage
            key={index}
            image={image.src}
            title={image.title}
            link={image.handle} />
    })

    return (
        <div className="grid grid-cols-4 gap-4">
            {gridImages}
        </div>
    )
}