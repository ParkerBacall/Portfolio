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
    const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`
    
    const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
