
import { useRouter } from 'next/router'
import { getImageByHandle, getImagesByHandle } from '../../data.js'
import Image from 'next/image.js';
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function DynamicPage() {
    const { query } = useRouter();

    const pageData = getImageByHandle(query.piece)

    const [currentIndex, setCurrentIndex] = useState(null)
    const [imagesArray, setImagesArray] = useState([])

    useEffect(() => {
        setImagesArray(getImagesByHandle(query.handle), [...imagesArray])
    }, [query])

    useEffect(() => {
        imagesArray.forEach((image, index) => {
            if (image.title === pageData?.title) {
                setCurrentIndex(index)
            }
        })

    }, [pageData, imagesArray])

    let prevHandle, nextHandle, category = ''
    let secondaryCategory = null

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

    if (useRouter().isReady) {
        prevHandle = '/' + query.handle + imagesArray.sort((a, b) => b.year - a.year)[currentIndex - 1]?.handle
        nextHandle = '/' + query.handle + imagesArray.sort((a, b) => b.year - a.year)[currentIndex + 1]?.handle
        category = query.handle
        if (category === 'home') {

            secondaryCategory = pageData.categories.filter(category => category !== 'home')[0]
        }
    }

    const images = pageData?.images.map((image, index) => {
        return <div className='pb-4' key={index}>
            <Image src={image}
                width={500}
                height={500}
                alt={pageData?.title}
                blurDataURL={rgbDataURL((Math.random() * 255), (Math.random() * 255), (Math.random() * 255))}
                placeholder='blur'
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    })

    if (!images?.length) {
        return (
            <div className='flex items-center flex-col'>
                <h2 className='p-2 text-[24px]'>
                    Woah Page Not Found
                </h2>
    
                <Link className='text-[18px] underline' href="/">Return to home</Link>
            </div>
        )
    }

    return (
        <div className="flex items-center flex-col">
        <div className="flex flex-col lg:flex-row w-[100%]">
            <div className="w-full lg:w-[50%] p-4">
                {images}
            </div>
            <div className="w-full lg:w-[50%]  p-4">
            <div className="p-2 md:hidden">
                    {imagesArray[currentIndex - 1] &&
                        <button className="relative pr-4 font-semibold underline"> <Link href={prevHandle}> Prev </Link> </button>
                    }
                    {imagesArray[currentIndex + 1] &&
                        <button className="relative font-semibold underline"> <Link href={nextHandle}> Next </Link> </button>
                    }
                </div>

                <div className="flex">
                {category &&
                    <h4 className="p-2 font-semibold text-[20px] text-neutral-500 capitalize relative">
                        <Link href={category === 'home' ? '/' : `/${category}`}>{category.replace('-', ' ')} </Link>
                    </h4>
                }
                {secondaryCategory && (
                    <>
                    <span className="p-2"> | </span>
                    <h4 className="p-2 font-semibold text-[20px] text-neutral-500 capitalize relative">
                        <Link href={`/${secondaryCategory}`}>{secondaryCategory.replace('-', ' ')} </Link>
                    </h4>
                    </>
                )}
                </div>

                <h2 className="p-2 font-semibold text-[24px] lg:text-[28px]">
                    {pageData?.title}
                </h2>


                {pageData?.medium &&
                    <p className="p-2 text-[20px]">
                        {pageData?.medium}
                    </p>
                }

                {pageData?.description &&
                    <p className="p-2 text-[18px]" dangerouslySetInnerHTML={{ __html: pageData?.description }}>
                    </p>
                }

                <div className="p-2 md:block hidden">
                    {imagesArray[currentIndex - 1] &&
                        <button className="relative pr-4 font-semibold underline"> <Link href={prevHandle}> Prev </Link> </button>
                    }
                    {imagesArray[currentIndex + 1] &&
                        <button className="relative font-semibold underline"> <Link href={nextHandle}> Next </Link> </button>
                    }
                </div>
            </div>
        </div>
        {pageData?.categories?.includes('games') && pageData?.embed && (
            pageData.embed
        )}
        </div>

    )
}
