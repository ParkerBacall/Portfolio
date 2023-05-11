import React from 'react'
import Image from 'next/image'

export default function GridImage({ image, title }) {
    
    return (
            <div className="h-[300px]">
                <Image src={image}
                    width={500}
                    height={500}
                    alt={title}
                    style={{objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
                />
            </div>
    )
}
