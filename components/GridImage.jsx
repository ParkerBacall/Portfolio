import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function GridImage({ image, title, link }) {
    const { asPath } = useRouter();

    const [isHighlighted, setIsHghlighted] = useState(false)

    const handleHeightlighted = () => {
        setIsHghlighted(true)
    }

    const handleMouseOut = () => {
        setIsHghlighted(false)
    }

    const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  
  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)
  
  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
    
    return (
        <div className="'h-[600px] 2xl:h-[400px] md:h-[300px] relative" onMouseEnter={handleHeightlighted} onMouseLeave={handleMouseOut}
        >
            <Link href={`${link ? asPath + link : '/'}`}>
                <div className={`font-medium z-10 absolute h-full w-full flex items-center justify-center ${isHighlighted ? 'bg-black/40 text-white' : 'bg-black/0 text-transparent'}`}>
                    <span>{title}</span>
                </div>
                <Image src={image}
                    loading='lazy'
                    placeholder="blur"
                    width={600}
                    height={600}
                    alt={title}
                    key={title}
                    blurDataURL={rgbDataURL((Math.random() * 255), (Math.random() * 255), (Math.random() * 255))}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Link>
        </div>
    )
}
