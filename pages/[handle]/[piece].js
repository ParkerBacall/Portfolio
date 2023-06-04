
import { useRouter } from 'next/router'
import { getImageByHandle, getImagesByHandle } from '../../Data.js'
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


    if (useRouter().isReady) {
        prevHandle = '/' + query.handle + imagesArray[currentIndex - 1]?.handle
        nextHandle = '/' + query.handle + imagesArray[currentIndex + 1]?.handle
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
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    })

    return (
        <div className="flex w-[100%]">
            <div className="w-[50%] p-4">
                {images}
            </div>
            <div className="w-[50%] p-4">

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

                <h2 className="p-2 font-semibold text-[28px]">
                    {pageData?.title}
                </h2>

                {pageData?.description &&
                    <p className="p-2 text-[18px]">
                        {pageData?.description}
                    </p>
                }

                <div className="p-2">
                    {imagesArray[currentIndex - 1] &&
                        <button className="relative pr-4 font-semibold underline"> <Link href={prevHandle}> Prev </Link> </button>
                    }
                    {imagesArray[currentIndex + 1] &&
                        <button className="relative font-semibold underline"> <Link href={nextHandle}> Next </Link> </button>
                    }
                </div>


            </div>
        </div>
    )
}
