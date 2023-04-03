import React from 'react'
import Image from 'next/image'

export default function CustomImage({ image, title }) {
    return (
            <div className="keen-slider__slide w-full flex justify-center !min-h-[700px]">
                <Image src={image}
                    width={700}
                    height={1000}
                    alt={title}
                />
            </div>
    )
}
