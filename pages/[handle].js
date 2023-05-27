
import { useRouter } from 'next/router'
import { getImageByHandle, getImagesByHandle } from '../Data.js'
import Image from 'next/image.js';
export default function DynamicPage() {
    const { query } = useRouter();

    const pageData = getImageByHandle(query.handle)
    console.log(pageData)

    const getCategoryImages = (categories) => {
        console.log("categories", categories)
        const imagesArray = []
         categories?.forEach(category => {
            if (category !== 'home')
            imagesArray.push(getImagesByHandle(category))
        })
        return imagesArray.flat()
    }

    console.log(getCategoryImages(pageData?.categories))

    return (
        <div className="flex w-[100%]">
            <div className="w-[50%] p-4">
                <Image src={pageData?.src}
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
            <div className="w-[50%] p-4">
            <h2  className="p-2 font-semibold text-[24px]">
                {pageData?.title}
            </h2>
            </div>
        </div>
    )
}
