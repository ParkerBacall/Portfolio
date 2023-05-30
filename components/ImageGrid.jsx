import GridImage from './GridImage'
import React from 'react'

export default function ImageSlideshow({ images }) {

    const gridImages = images.map((image, index) => {
        return <GridImage
            key={index}
            image={image.images[0]}
            title={image.title}
            link={image.handle} />
    })

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gridImages}
        </div>
    )
}