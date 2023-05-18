
import { useRouter } from 'next/router'

export default function index() {
    const router = useRouter();
    return(
        <h2 className='p-2'>
           Dynamic page
        </h2>
    )
}
