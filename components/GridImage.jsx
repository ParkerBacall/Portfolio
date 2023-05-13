import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GridImage({ image, title, link }) {

    const [isHighlighted, setIsHghlighted] = useState(false)

    const handleHeightlighted = () => {
        setIsHghlighted(true)
    }

    const handleMouseOut = () => {
        setIsHghlighted(false)
    }

    return (
            <div className="h-[300px] relative" onMouseEnter={handleHeightlighted} onMouseLeave={handleMouseOut}
            >
                <Link href={link ? link : '/'}>
                <div className={`z-10 absolute bg-black/40 h-full w-full items-center justify-center ${isHighlighted ?'flex': 'hidden'}`}>
                    <span className='text-white'>{title}</span>
                </div>
                <Image src={image}
                    width={500}
                    height={500}
                    alt={title}
                    style={{objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
                />
                </Link>
            </div>
    )
}
