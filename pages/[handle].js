
import { useRouter } from 'next/router'
import {getImageByHandle} from '../data.js'
import Image from 'next/image.js';
export default function DynamicPage() {
    const {query} = useRouter();

    const pageData = getImageByHandle(query.handle)
    console.log(pageData)
    return(
        <>
        <h2 className='p-2'>
           {pageData?.title}
        </h2>
        <Image src={pageData?.src}
                    width={500}
                    height={500}
                    alt={pageData?.title}
                    style={{objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
                />
        </>
    )
}
