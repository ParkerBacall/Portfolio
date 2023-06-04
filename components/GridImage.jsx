import React, {useState} from 'react'
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

    return (
            <div className="h-[400px] relative" onMouseEnter={handleHeightlighted} onMouseLeave={handleMouseOut}
            >
                <Link href={`${link ?  asPath+'/'+link : '/'}`}>
                <div className={`font-medium z-10 absolute h-full w-full flex items-center justify-center ${isHighlighted ?'bg-black/40 text-white': 'bg-black/0 text-transparent'}`}>
                    <span>{title}</span>
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
