
import { useRouter } from 'next/router'

export default function DynamicPage() {
    const router = useRouter();
    return(
        <h2 className='p-2'>
           Nested Dynamic page
        </h2>
    )
}
