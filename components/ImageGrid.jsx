import GridImage from './GridImage'
import React from 'react'

export default function ImageSlideshow() {

    return (
        <div className="grid grid-cols-4 gap-4">

            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680743856/thisWillEND_axjmi6.png'
                title='This will end'
                href="/" />
            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680493838/meWithart_sdmybv.png'
                title='Artist with Carrion painting' href="/" />

            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680563695/FALLEN_szv0bn.png'
                title='Fallen Mural' href="/" />

            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680563697/SEPUKKU_bqqpo0.png'
                title='Seppuku Mural' href="/" />

            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680149030/final4_amutft.png'
                title='Skull Sqaure' href="/" />


            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680149027/flowerskull_eo9dbf.png'
                title='Skull Sqaure' href="/" />

            <GridImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680149032/totem_vkzr1y.png'
                title='Skull Sqaure' href="/"/>
        </div>
    )
}
