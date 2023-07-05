import React from 'react'


export default function CategoryTitle({ title }) {

    return (
        <h2 className='font-medium p-2 text-[36px] text-center border border-0 border-b-[1px] border-gray mb-[20px]'>
            {title}
        </h2>
    )
}
